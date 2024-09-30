import psycopg2


def estconnection():
        conn = psycopg2.connect(
                host="localhost",
                port="5432",
                database="cs_courses",
                user="postgres",
                password="1297")
        return conn
