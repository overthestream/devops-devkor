# What is Github Actions?

## Understanding Github Actions

### Overview

```Github Actions```는 build, test, deploy 파이프라인을 자동화할 수 있는 continuous integration and continuous delivery(CI/CD) 플랫폼입니다.

### The components of Github Actions

#### Workflows

- 1개 이상의 ```jobs```를 실행하는 자동화된, configurable process

- ```YAML``` file에 정의된 event, time schedule에 의하여 실행됨

- 한 repository에서 각각 다른 다수의 workflow를 가질 수 있음

#### Events

workflow를 실행시키는 PR, issue, push 등의 특정 활동

#### Jobs

- workflow 내에서 실행되는 각각의 shell script step

- 동일 runner에서 실행되므로 서로 dependent
  
#### Actions

Github Actions 플랫폼을 위한, 복잡하고 자주 수행되는 task를 실행하는 커스텀 애플리케이션

#### Runners

- workflow가 유발됐을 때 그것을 실행하는 서버

- Ubuntu Linux, Window, macOS runner를 제공

### Syntax for Github Actions

#### example

``` YAML
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

#### Understanding the workflow file

- ```name```
  
Optional - Actions 탭에 나타나는 workflow의 이름

- ```on```

workflow의 trigger, 예시에서는 ```push```될 때마다 workflow가 실행

```paths```, ```paths-ignore```, ```branch```, ```branch-ignore``` 등의 option으로 filtering도 가능

schedule, push, merge 등

- ```jobs```

한 workflow 내에서 실행되는 jobs의 group

- ```check-bats-version```

하나의 job의 이름

- ```runs-on```

spcify the runner

- ```steps```

job 내에서 실행되는 step의 group 

- ```uses```

specify the action

- ```with```
  
specify the version

- ```run```

execute할 command 또는 script를 정의
