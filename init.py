from flask import Flask, request, render_template, jsonify
import os
import time
import pymysql

app = Flask(__name__)

@app.route('/')
@app.route('/<name>')
def index(name=None):
    if name == 'index.html' or name==None:
        return render_template('index.html', name=name)
    else:
        return render_template('pages/404.html', name=name)

@app.route('/pages/<name>')
def sport(name=None):
    dirs = 'templates/pages/%s' % name
    if not os.path.exists(dirs):
        return render_template('pages/404.html', name=name)
    else:
        return render_template('pages/%s' % name, name=name)

@app.route('/postComments',methods=['POST'])
def postComments():
    if request.method == 'POST':
        t = time.gmtime()
        content = request.form['content']
        Time = time.strftime( "%Y-%m-%d %H:%M:%S" ,t)
        page = request.form['page']
        conn = pymysql.connect(host='localhost', user='bestSCU', password='12345678', port=3306, db='bestSCU')
        cur = conn.cursor()
        sql = "INSERT INTO comments (time, page, content) VALUES "+"('"+str(Time)+"', '"+str(page)+"', '"+str(content)+"');"
        cur.execute(sql)
        conn.commit()
        conn.close()
        return jsonify({"status":True})
    else:
        return jsonify({"status":False})

@app.route('/queryComments',methods=['GET'])
def queryComments():
    if request.method == 'GET':
        page = request.args['page']
        try:
            num = request.args['cur']
        except:
            num=None
        if num == None or int(num)<=0:
            conn = pymysql.connect(host='localhost', user='bestSCU', password='12345678', port=3306, db='bestSCU')
            cur = conn.cursor()
            sql = "SELECT id FROM comments WHERE page='"+page+"'"
            cur.execute(sql)
            total = cur.fetchall()
            conn.close()
            return jsonify({"total":len(total)})
        else:
            conn = pymysql.connect(host='localhost', user='bestSCU', password='12345678', port=3306, db='bestSCU')
            cur = conn.cursor()
            sql = "SELECT content, time FROM comments WHERE page='"+page+"' ORDER BY time DESC LIMIT "+str(5 * int(num) - 5)+",5"
            cur.execute(sql)
            data = None
            data = cur.fetchall()
            response = {}
            response["0"]=[]
            cnt = 0
            # ret是查询返回的结果对象
            if data != None:
                for i in range(len(data)) :
                    response["0"].append({"content":data[i][0]})
                    cnt = int(cnt)+1
            conn.close()
            response["total"]=cnt
            return jsonify(response)
    else:
        print("请求失败")

if __name__ == '__main__':
    app.run()