# API_ROUTES MAPPÁBAN LESZNEK PYTHON LOGIKA (BACKEND LOGIKA) MEGVALOSITVA
# MINDEGYIK VEGPONTHOZ SZERINTEM KÜLÖN PY FILE

from flask import Blueprint, jsonify

# a bp-t majd átcserélünk valami_bp-re, pl.: events_bp
bp = Blueprint("events", __name__)

@bp.route("/api_routes/events")
def events_calendar():
    events = [
        {"title": "Anna szülinapja", "start": "2025-08-21", "type": "birthday"},
        {"title": "Karácsony", "start": "2025-12-25", "type": "holiday"},
    ]
    return jsonify(events)
