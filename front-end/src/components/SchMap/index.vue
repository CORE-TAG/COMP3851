<template lang="">
  <div class="body">
    <h1>Nearby Facilities Map</h1>
    <el-row style="width: 100%" :gutter="20">
      <el-col :span="12">
        <el-select
          id="facility-type"
          placeholder="Please select facility type"
          v-model="facilityType"
        >
          <el-option value="bank" label="Banks">Banks</el-option>
          <el-option value="restaurant" label="Restaurants"
            >Restaurants</el-option
          >
          <el-option value="library" label="Library">Library</el-option>
          <el-option value="museum" label="Museum">Museum</el-option>
        </el-select>
        <el-button
          @click="searchFacilities"
          style="margin-left: 10px"
          id="searchBtn"
          >Search</el-button
        >

        <div id="map"></div>
      </el-col>
      <el-col :span="12">
        <div class="infinite-list box" v-infinite-scroll="load">
          <div id="info-box"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAc9G53kJLRz8mfgo2Dr1tameT3Tc0h2jc",
  version: "weekly",
  libraries: ["places"],
  language: "en",
});
export default {
  name: "SchMap",
  data() {
    return {
      PSBAcademy: { lat: 1.290381779233532, lng: 103.85878109719954 },
      ICA: { lat: 1.3068028327182046, lng: 103.86276887080366 },
      map: "",
      markers: [],
      google: "",
      facilityType: "",
    };
  },
  mounted() {
    this.initMap();
    this.searchFacilities();
  },
  methods: {
    initMap() {
      const mapOptions = {
        zoom: 14,
        center: this.PSBAcademy,
      };
      loader
        .load()
        .then((google) => {
          this.google = google;
          this.map = new google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          this.google.maps.event.addListener(this.map, "click", this.clickMap); // 监听地图点击事件
        })
        .catch((e) => {
          console.log(e);
        });

      const psbMarker = this.createMarker(
        this.PSBAcademy,
        "PSBAcademy",
        this.getPSBContentString()
      );
      const icaMarker = this.createMarker(
        this.ICA,
        "Immigration & Checkpoints Authority",
        this.getICAContentString()
      );

      psbMarker.addListener("click", () => {
        const psbInfowindow = new this.google.maps.InfoWindow({
          content: this.getPSBContentString(),
        });
        psbInfowindow.open(this.map, psbMarker);
      });

      icaMarker.addListener("click", () => {
        const icaInfowindow = new this.google.maps.InfoWindow({
          content: this.getICAContentString(),
        });
        icaInfowindow.open(this.map, icaMarker);
      });
    },

    createMarker(position, title) {
      const marker = new this.google.maps.Marker({
        position: position,
        map: this.map,
        title: title,
      });
      this.markers.push(marker);
      return marker;
    },

    searchFacilities() {
      const request = {
        location: this.PSBAcademy,
        radius: 1000,
        types: [this.facilityType],
      };

      const service = new this.google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, this.callback);
    },

    callback(results, status) {
      if (status === this.google.maps.places.PlacesServiceStatus.OK) {
        const infoBox = document.getElementById("info-box");
        infoBox.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
          const place = results[i];
          const name = place.name;
          const vicinity = place.vicinity;

          const placeRequest = {
            placeId: place.place_id,
            fields: [
              "formatted_address",
              "formatted_phone_number",
              "opening_hours",
              "website",
              "photos",
              "rating",
            ],
          };

          const service = new this.google.maps.places.PlacesService(this.map);
          service.getDetails(placeRequest, (placeResult, status) => {
            if (status === this.google.maps.places.PlacesServiceStatus.OK) {
              infoBox.innerHTML +=
                "<strong>" + name + "</strong><br>" + vicinity + "<br>";
              if (placeResult.formatted_address) {
                infoBox.innerHTML +=
                  "Address: " + placeResult.formatted_address + "<br>";
              }
              if (placeResult.formatted_phone_number) {
                infoBox.innerHTML +=
                  "Phone: " + placeResult.formatted_phone_number + "<br>";
              }
              if (placeResult.opening_hours) {
                infoBox.innerHTML +=
                  "Opening Hours: " +
                  placeResult.opening_hours.weekday_text.join("<br>") +
                  "<br>";
              }
              if (placeResult.website) {
                infoBox.innerHTML +=
                  'Website: <a href="' +
                  placeResult.website +
                  '">' +
                  placeResult.website +
                  "</a><br>";
              }
              if (placeResult.photos && placeResult.photos.length > 0) {
                infoBox.innerHTML +=
                  '<img src="' +
                  placeResult.photos[0].getUrl({
                    maxWidth: 200,
                    maxHeight: 200,
                  }) +
                  '"><br>';
              }
              if (placeResult.rating) {
                infoBox.innerHTML += "Rating: " + placeResult.rating + "<br>";
              }
              infoBox.innerHTML += "<br>";
            }
          });
        }
      }
    },

    getPSBContentString() {
      return `<div id="content">
                <div id="siteNotice"></div>
                <h1 id="firstHeading" class="firstHeading">PSBAcademy</h1>
                <div id="bodyContent">
                  <p><b>CITY CAMPUS AND STEM WING IN MARINA SQUARE</b></p>
                  <p><strong>Website:</strong> <a href="https://www.psb-academy.edu.sg/">https://www.psb-academy.edu.sg/</a></p>
                  <p>Vibrant environment, the convenience of travel, easy access to a myriad of recreational spaces.
                  Enjoy them all simply by studying at PSB Academy City Campus which encompasses the Main and STEM Wing!!
                  As one of the few schools in Singapore with campuses built in the heart of the city,
                  there is much that PSB Academy has to offer.</p>
                </div>
              </div>`;
    },

    getICAContentString() {
      return `<div id="content">
                <div id="siteNotice"></div>
                <h1 id="firstHeading" class="firstHeading">Immigration & Checkpoints Authority</h1>
                <div id="bodyContent">
                  <p><b>10 Kallang Rd, Singapore 208718</b></p>
                  <p><strong>Website:</strong> <a href="https://www.ica.gov.sg/">https://www.ica.gov.sg/</a></p>
                  <p><b>APPLYING FOR A STUDENT PASS AT ICA</b></p>
                  <p>Welcome to the Immigration & Checkpoints Authority (ICA), the place to apply for a Student Pass in Singapore!
                  If you're a new student planning to study in Singapore, we're here to guide you through the process.</p>
                  <p><b>Step 1: Secure admission to an approved educational institution</b></p>
                  <p>Before applying for a Student Pass, you need to gain acceptance into a Singaporean educational institution
                  that is recognized by the Ministry of Education or the Council for Private Education.</p>
                  <p><b>Step 2: Receive the offer letter or In-Principle Approval (IPA)</b></p>
                  <p>Once you've been accepted by an educational institution, they will issue you an offer letter or an In-Principle Approval (IPA) letter.
                  This letter is a requirement for your Student Pass application.</p>
                  <p><b>Step 3: Submit your application</b></p>
                  <p>Visit the ICA website and access the e-Service for Student's Pass Online Application & Registration (SOLAR). Fill in the required information, including personal details, educational institution details, and other necessary documents. Ensure that you have all the required documents, such as passport details, a recent passport-sized photograph, the offer letter or IPA letter, and any other documents specified by the ICA.</p>
                  <p><b>Step 4: Pay the necessary fees</b></p>
                  <p>As part of the application process, you will need to pay the required fees. The current fee for a Student Pass application is typically SGD 30, with an additional SGD 60 for issuance.</p>
                  <p><b>Step 5: Complete the medical examination (if required)</b></p>
                  <p>Depending on your nationality and the length of your course, you may need to undergo a medical examination at a recognized clinic or hospital. The ICA will provide instructions regarding this if applicable.</p>
                  <p><b>Step 6: Wait for the outcome</b></p>
                  <p>After submitting your application, you'll need to wait for the ICA to process it. The processing time can vary, but it typically takes a few weeks. You can track the status of your application using the SOLAR system.</p>
                  <p><b>Step 7: Collect your Student Pass</b></p>
                  <p>If your application is approved, you will receive an In-Principle Approval (IPA) letter. You'll need to visit the ICA in person to complete the formalities and collect your Student Pass. Make sure to bring your passport and other necessary documents as specified in the IPA letter.</p>
                  <p>Remember that the above steps are a general guideline, and there may be additional requirements or specific procedures based on your individual circumstances. It's always recommended to refer to the ICA website or contact the ICA directly for the most up-to-date and accurate information regarding Student Pass applications in Singapore.</p>
                </div>
              </div>`;
    },
  },
};
</script>
<style lang="less" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}

#map {
  height: 80vh;
  width: 100%;
  margin-top: 20px;
}

#info-box {
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#info-box strong {
  font-weight: bold;
}

#info-box p {
  margin: 10px 0;
}

#info-box hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}
.box {
  background-color: #dfdcdc;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 84vh;
  overflow: auto;
}
</style>
