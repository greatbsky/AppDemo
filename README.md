# AppDemo

#commands
react-native run-android
adb reverse tcp:8081 tcp:8081
react-native start

#initialize project
E:\MyWork3>react-native init AppDemo
E:\MyWork3\AppDemo>react-native run-android
E:\MyWork3\AppDemo>adb reverse tcp:8081 tcp:8081

E:\MyWork3\AppDemo>npm install rnpm -g
E:\MyWork3\AppDemo>npm install -g code-push-cli
E:\MyWork3\AppDemo>code-push app add AppDemo-Android
E:\MyWork3\AppDemo>code-push release-react AppDemo-Android android
E:\MyWork3\AppDemo>code-push deployment ls AppDemo-Android
E:\MyWork3\AppDemo>code-push debug android

#other
E:\MyWork3\AppDemo>npm i --save-dev redux-logger
