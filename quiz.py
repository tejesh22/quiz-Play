from flask import Flask,render_template,request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Tejesh123.'
app.config['MYSQL_DB'] = 'mk'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/',methods=['GET','POST'])
def quiz():

    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']

        cur = mysql.connection.cursor()

        cur.execute("INSERT INTO quiz(name,email) VALUES (%s,%s) ",(name,email))

        mysql.connection.commit()
        cur.close()
        return "Recorded successfully"

    return render_template('quiz.html')


@app.route('/quiz1.html',methods=['GET','POST'])
def quiz1():

    return render_template('quiz1.html')

@app.route('/quiz2.html',methods=['GET','POST'])
def quiz2():

    return render_template('quiz2.html')

if __name__ == "__main__":
    app.run(debug=True)