python -m pip install --user --upgrade pip
pip freeze > .\backend\covid\requirements.txt  
start /min cmd /c python .\backend\covid\manage.py runserver
cd frontend\covid-app3
call npm i
call npm start
echo Success 
pause