# Find Difference between two files.
## **This** utilite compares two data structure.
### Before you start, you have to:
  1. Clone this repo in you working directory:
   ```
   git clone git@github.com:nikitaChandler01/frontend-project-46
   ```
  2. Being in working directory:
   ```
   make install
   ```
  3. Utile compares JSON and YAML files. To compare, put them in ``__fixtures__``. After that you can use absolute path, relative path or only its filename! 
   
  4. Also utils supports three formatters (stylish is default). You can see how it works bellow:

__You can compare 2 JSON files:__
   ```
   gendiff file1.json file2.json
   ```

  [![asciicast](https://asciinema.org/a/595372.svg)](https://asciinema.org/a/595372)

__You can compare JSON with YAML files:__
 ```
 gendiff file1.json file2.yaml // for example
 ```
  [![asciicast](https://asciinema.org/a/WwA4xcAfsDnu3iDwtJRmg63tu.svg)](https://asciinema.org/a/WwA4xcAfsDnu3iDwtJRmg63tu)

__You can choose the most usefull formatter for you!__
 just use ```--format``` flag: 
  [![asciicast](https://asciinema.org/a/595353.svg)](https://asciinema.org/a/595353)

  [![asciicast](https://asciinema.org/a/595370.svg)](https://asciinema.org/a/595370)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/nikitaChandler01/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/nikitaChandler01/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/090881c618bd586b55a5/maintainability)](https://codeclimate.com/github/nikitaChandler01/frontend-project-46/maintainability)

### CodeClimate test-coverage status:  
[![Test Coverage](https://api.codeclimate.com/v1/badges/090881c618bd586b55a5/test_coverage)](https://codeclimate.com/github/nikitaChandler01/frontend-project-46/test_coverage)