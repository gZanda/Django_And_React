# Django & React Guide 📚
> By: Gabriel Zanda

## 📌 Project Setup 📌

- Create Project Global Wrapper:
```shell
mkdir Django_Project
```

- Move to it:
```
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
```

- Make the project folder:
```Shell
django-admin startproject drinks_project
```

- Move to it:
```Shell
cd drinks_project/
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
    'tasks_app',        # new app
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
