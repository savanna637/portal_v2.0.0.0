# EGYÉB FÜGGVÉNYEK
# SEGÉDFÜGGVÉNYEK MAPPÁJA
# KÖTETLENEBB

from datetime import date, datetime, timedelta
import datetime as dt
import calendar
import traceback
import holidays

##### IDŐSZÁMÍTÁSI/FORMÁZÁSI SEGÉDFÜGGVÉNYEK

def calculate_annual_pto_days(yearofbirth: int, onboarding_date: date, is_disabled: bool, number_of_children: int, number_of_disabled_children: int) -> int | None:
    try:
        current_year = int(date.today().year)
        age = current_year - yearofbirth
        base_leave = 20
        extra_leave = 0

        # Extra leave based on age
        if age <= 18:
            extra_leave += 5
        elif age >= 25:
            extra_leave += min(10, max(0, min(3, (age - 25) // 3 + 1)) + max(0, (age - 33) // 2 + 1))
        else:
            extra_leave += 0

        # Extra leave based on children
        if number_of_children < 3:
            extra_leave += number_of_children * 2
        else:
            extra_leave += 7  # 3 or more children = 7 days
        extra_leave += number_of_disabled_children * 2

        # Extra leave based on disability
        if is_disabled:
            extra_leave += 5
        
        annual_pto_days = base_leave + extra_leave
        return annual_pto_days
    except Exception as e:
        print("Error in calculate_annual_pto_days:", traceback.format_exc())
        return None

def format_month(month_name, year=None):
    try:
        if year is None:
            year = datetime.now().year
        print(f"format mont year: {year}")
        print(f"format month month: {month_name}")

        month_date = datetime.strptime(month_name, "%B")
        print(f"format month month date: {month_date}")
        formatted_date = f"{year}-{month_date.month:02d}"
        print(f"format month formatted date: {formatted_date}")
        return formatted_date
    except ValueError:
        return "Invalid month name"

def cut_off_weekends(date_list): 
    weekday_ranges = []
    current_start_date = None

    for date in date_list:
        if is_weekend(date) is False:
            if current_start_date is None:
                current_start_date = date
            current_end_date = date
        else:
            if current_start_date is not None:
                weekday_ranges.append((current_start_date, current_end_date)) 
                current_start_date = None

    if current_start_date is not None:
        weekday_ranges.append((current_start_date, current_end_date))

    return weekday_ranges

def get_dates_between(start_date, end_date):
    if type(start_date) is str:
        start_date = datetime.strptime(str(start_date), '%Y-%m-%d')
    if type(end_date) is str:
        end_date = datetime.strptime(str(end_date), '%Y-%m-%d')
    dates_list = []
    current_date = start_date
    while current_date <= end_date:
        dates_list.append(current_date.strftime('%Y-%m-%d'))
        current_date += timedelta(days=1)

    return dates_list

def is_weekend(date_str):
    if type(date_str) is str:
        date = datetime.strptime(str(date_str), '%Y-%m-%d')
    else:
        date = date_str
    if date.weekday() in [5, 6]:  # Saturday is 5, Sunday is 6
        return True
    else:
        return False

def days_between_dates(date1_str, date2_str):
    delta = date2_str - date1_str
    
    return delta.days + 1

def days_remaining_in_year(date_str):
    date_format = "%Y-%m-%d"  # Expected format
    current_date = datetime.strptime(date_str, date_format)
    
    # Find the last day of the current year
    last_day_of_year = datetime(current_date.year, 12, 31)
    
    # Calculate the difference
    remaining_days = (last_day_of_year - current_date).days
    
    return remaining_days

def workdays_between_dates(date_str1: str, date_str2: str) -> int:
    start_date = datetime.strptime(date_str1, "%Y-%m-%d").date()
    end_date = datetime.strptime(date_str2, "%Y-%m-%d").date()

    if start_date > end_date:
        return 0

    # Load Hungarian holidays for the full date range
    years = set(range(start_date.year, end_date.year + 1))
    hu_holidays = holidays.country_holidays('HU', years=years)

    workdays = 0
    current_date = start_date

    while current_date <= end_date:
        if current_date.weekday() < 5 and current_date not in hu_holidays:
            workdays += 1
        current_date += timedelta(days=1)

    return workdays

def get_month_bounds(year: int, month: int):
    first_day = dt.date(year, month, 1)
    last_day = dt.date(year, month, calendar.monthrange(year, month)[1])
    return first_day, last_day

def get_month_bounds_str(year: int, month_name: str) -> tuple[str, str]:
    month_number = list(calendar.month_name).index(month_name)
    first_day, last_day = get_month_bounds(year, month_number)
    return first_day.isoformat(), last_day.isoformat()

def get_current_month_bounds():
    today = dt.date.today()
    return get_month_bounds(today.year, today.month)

def get_month_name_offset(offset: int) -> str:
    HUNGARIAN_MONTHS = [
        "",
        "Január", "Február", "Március", "Április", "Május", "Június",
        "Július", "Augusztus", "Szeptember", "Október", "November", "December"
    ]
    today = dt.date.today()
    mid_this_month = today.replace(day=15)
    target_date = mid_this_month + timedelta(days=30 * offset)
    return HUNGARIAN_MONTHS[target_date.month]

def format_time(time_str):
    parts = time_str.split(":")
    hours, minutes = parts[0], parts[1]
    return f"{hours.zfill(2)}:{minutes}"
