---
id: cwl-calrissian
title: Run CWL workflows
---

[![BioLink model](/dsri-documentation/img/biolink-logo.png)](https://github.com/MaastrichtU-IDS/d2s-transform-biolink)

## Install CWL Calrissian

```shell
oc create role pod-manager-role --verb=create,delete,list,watch --resource=pods
oc create role log-reader-role --verb=get,list --resource=pods/log
oc create rolebinding pod-manager-default-binding --role=pod-manager-role --serviceaccount=test-vincent:default
oc create rolebinding log-reader-default-binding --role=log-reader-role --serviceaccount=test-vincent:default
```

---

## Clone the repository

Git clone in `/calrissian` from a terminal (e.g. [Jupyterlab](https://app.dsri.unimaas.nl:8443/console/project/test-vincent/browse/pods/jupyterlab-root-2-8w472?tab=terminal), shared in `/data/calrissian`).

```shell
cd /data/calrissian
git clone --recursive https://github.com/MaastrichtU-IDS/d2s-transform-template.git
cd d2s-transform-template
```

You might need to give permissions.

```shell
chmod -R 777 /data/calrissian
```

---

## Start pod

From your computer using the `oc` client.

```shell
oc create -f d2s-cwl-workflows/support/run-cwl-calrissian.yaml
```

> Browse running pods [here](https://app.dsri.unimaas.nl:8443/console/project/test-vincent/browse/pods).

## Delete created pod

```shell
oc delete -f d2s-cwl-workflows/support/run-cwl-calrissian.yaml
```
