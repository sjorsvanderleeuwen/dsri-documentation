---
id: openshift-delete-services
title: Delete deployed service
---

[![OpenShift](/dsri-documentation/img/openshift-logo.png)](https://www.openshift.com/)

Connect to your project

```shell
oc project my-project
```

## Delete deployed service

The best way to delete all objects generated by a template deployment is to use the `oc` command with a selector.

The selector can easily be found in the template configuration:

<img src="/dsri-documentation/img/screenshot-get-deployment-label.png" alt="Get deployment label" style="max-width: 100%; max-height: 100%;" />

All object created by the template will be tagged with the labels defined at this step.

In this example, with Apache Spark, the following selector can be used to get all objects related to the `spark` deloyment:

```shell
oc get all --selector app=spark
```

### Delete a deployment

Delete objects related to a deployment using a selector

```shell
oc delete all --selector app=my-deployment
```

### Delete all objects

Delete `all` does not include ConfigMaps and Secrets, to delete all objects related to a deployment use:

```shell
oc delete all --selector app=my-deployment
oc delete secret --selector app=my-deployment
oc delete configmaps --selector app=my-deployment
```

### Force deletion

```shell
oc delete all --force --grace-period=0 --selector app=my-deployment
```

---

## Delete pod

Get the ID of the specific pod you want to delete:

```shell
oc get pod
```

Use the pod ID retrieved to delete the pod:

```shell
oc delete pod <pod_id>
```

Force deletion:

```shell
oc delete pod --force --grace-period=0 <pod_id>
```

---

## Fix stuck deletions

### Stuck provisioned service

If a provisioned service is stuck on `Marked for deletion` you might need to set finalizers to null in the YAML.

This can be done using the OpenShift web UI:

* Go to the **Provisionned Service** in the OpenShift UI overview

* Click on **Edit YAML**

* Remove the **finalizers**:

  ```yaml
    finalizers:
      - kubernetes-incubator/service-catalog
  ```

You can also do it using the `oc` CLI:

```shell
oc get serviceinstance
oc edit serviceinstance <service_instance_id>

# Delete the following lines in metadata:
finalizers: null 	# add null
  - kubernetes-incubator/service-catalog   # Delete this line
```

> The OpenShift Catalog does not handle deploying templates globally (on all projects). If a template is deployed globally, OpenShift will try to create unnecessary objects such as provisioned service (aka. **ServiceInstance**), or ClusterClasses. Those services are not used, and some of them cannot be deleted easily. 
>
> At the moment it is much more reliable to create the template in each project.

You can also do it through the 

* Go to the **Provisionned Service** in the OpenShift UI overview

* Click on **Edit YAML**

* Remove the **finalizers**:

  ```yaml
    finalizers:
      - kubernetes-incubator/service-catalog
  ```

### Delete stuck project

Project can get stuck as marked for deletion. Usually due to ServiceInstance not terminated or a `finalizers` left in the **Project** YAML file.

This command remove `kubernetes-incubator` finalizers from ServiceInstance in terminating projects:

```shell
for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc get serviceinstance -n $i -o yaml | sed "/kubernetes-incubator/d"| oc apply -f - ; done
```