Bootstrap for Python
====================

- Create a Python3 virtualenv (anaconda users: conda create -n codekata python=3.5 anaconda )
- python calculator_test.py

for more fun you can also install an optional watcher (pip install -r dev-requirements)

    ptw --beforerun 'flake8 .'

and on osx you can have more fun

    ptw --onfail "say FAIL" --beforerun 'flake8 .'
