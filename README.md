<span style="font-size: 2em; font-weight: bold;"> Django & React Guide 📚 </span> 

Basic guide on how to create a CRUD application with **Django**, **Rest Framework** and **React**

## how to setup the project ?

- Create Project Global Wrapper
```Shell
mkdir Django_Project
```
- Move to it
```Shell
cd Django_Project
```
- Create Virtual Environment
```Shell
python3 -m venv .venv
```
- Start the Virtual environment
```Shell
. .venv/bin/activate
```
- Install dependencies
```Shell
pip install django
pip install djangorestframework
pip install django-cors-headers
```
- Make the project folder
```Shell
django-admin startproject drinks_project
```
- Move to it
```Shell
cd drinks_project/
```
- Add dependencies to "Settings.py"
```Shell
'rest_framework',
'corsheaders',
```
- Create SuperUser
```Shell
python manage.py createsuperuser
```
- Migrate to resolve errors
```Shell
python manage.py migrate
```
- Runserver
```Shell
python manage.py runserver
```
