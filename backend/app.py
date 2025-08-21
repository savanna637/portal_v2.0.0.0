# EBBEN AZ OSZTÁLYBAN INICIALIZÁLOM A VÉGPONTOKAT
# BLUEPRINT-TEL IMPORTÁLUNK így: 
# app.register_blueprint( valami_bp )
# from api_routes.valami import valami.bp


from flask import Flask
from api_routes.events import bp as events_bp 

def create_app():
    app = Flask(__name__)
    app.register_blueprint(events_bp)

    return app

# belépési pont
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
