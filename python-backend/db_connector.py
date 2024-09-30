import psycopg2
import os

def estconnection():
        db_name= os.environ['RENDER_DATABASE']
        db_host = os.environ['RENDER_HOST']
        db_password = os.environ['RENDER_PASS']
        db_port = os.environ['RENDER_PORT']
        db_username = os.environ['RENDER_USER']
        conn = psycopg2.connect(
                host=db_host,
                port=db_port,
                database=db_name,
                user=db_username,
                password=db_password,
                sslmode='require')
        return conn
