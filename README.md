> By: Gabriel Zanda
# Django & React Guide 📚

### 📌 Project Setup

- Create Project Global Wrapper:
```Shell
mkdir Django_Project
```

- Move to it:
```Shell
cd Django_Project
```

- Create Virtual Environment:
```Shell
python3 -m venv venv
```

- Start the Virtual environment:
```Shell
. venv/bin/activate
```

- Install dependencies:
```Shell
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install psycopg2-binary
```

- Start project ( will make a new folder ):
```Shell
django-admin startproject tasks_project
```

- Move to it:
```Shell
cd tasks_project/
```

- Add dependencies to "Settings.py":
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',   # new dependency
    'corsheaders',      # new dependency
]
```

- Add "Cors" middleware:
```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # new middleware
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

- Adjust the Cors Origin URL:
```python
CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]
```

- Create SuperUser:
```Shell
python manage.py createsuperuser
```

- Migrate to resolve errors:
```Shell
python manage.py migrate
```

- Runserver:
```Shell
python manage.py runserver
```

### 📌 Creating APPS
