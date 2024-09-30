from flask import Flask, jsonify
from flask_cors import CORS
import db_connector as db

app = Flask(__name__, template_folder='templates')
CORS(app)

@app.route('/', methods=['GET'])
def course_table():
    conn = db.estconnection()
    curr = conn.cursor()
    curr.execute("SELECT * FROM plot")
    rows = curr.fetchall()
    column_names = [desc[0] for desc in curr.description]
    data = [dict(zip(column_names, row)) for row in rows]
    curr.close()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
