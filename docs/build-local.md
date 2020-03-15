---
id: build-local
title: Build (local)
---

## get static files ready
run simplicity to get static files ready.

```shell
cnc start simplicity
cnc into simplicity
BUNDLES=ecare
grunt serve
```

## Permession denied
you might run on permession denied. in that you should navigate to `../distripution/` and check for `simplicity` folder permessions. if it is not `vf-group` then you should run the following line after exiting the container.

```shell
docker exec -u root -it [container] chown -R vf:vf-group /home/vf/distribution/simplicity/
```
## Customizing ng-modules
if you have customed ng-modules you should build it as follow

```shell
cnc start ng-modules
cnc into ng-modules
ccnc build
exit
```
## Linking
Each target container would be linked by default to latest version of ng-modules. therefore, you should link to your customed version each time you start you target container.
```shell
cnc start ecare
cnc into ecare
cd ../distributions/ng-modules
npm link
cd ../../ecare
npm link ../distripution/ng-modules/
```
## Building module 
finaly, copy below commands to build your target container
```shell
npm build
npm development_mode
```
we run `development_mode` for symlink preservation and to make code build with eash change in code.
access app throuh local chrome with url `vodafone.local/...`