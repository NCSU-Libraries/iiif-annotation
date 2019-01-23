---
layout: page
title: Image Viewer
permalink: /imageviewer/
---
<script src="https://unpkg.com/vue"></script>
<script src="{{site.url}}{{site.baseurl}}/dist/iiif-annotation.min.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.url}}{{site.baseurl}}/dist/iiif-annotation.css">
<!--<script id="config" type="application/json">{
  "view_larger":false,
  "view_caption":false,
  "view_full_object":false,
  "view_ocr":false
}</script>-->

Below is an example of annotation url. This is a single annotation. In the JSON they will have a type of annotation or oa:annotation. An annotation list will have a type of AnnotationList. The following four lines of code are required to render. The first three lines only need to be loaded in a page one time (they do not repeat).

```
<script src="https://unpkg.com/vue"></script>
<script src="{{site.url}}{{site.baseurl}}/dist/iiif-annotation.min.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.url}}{{site.baseurl}}/dist/iiif-annotation.css">
<iiif-annotation annotationurl="{{site.url}}{{site.baseurl}}/webannotations/annotation1.json"></iiif-annotation>

```
<iiif-annotation annotationurl="{{site.baseurl}}/webannotations/annotation1.json"></iiif-annotation>


The next example is an annotation list. These are normally denoted in the annotation json as AnnotationList, they will consist of multiple annotations on one image.
```
<iiif-annotation annotationlist="https://iiif.harvardartmuseums.org/manifests/object/198021/list/48466698"></iiif-annotation>
```

<iiif-annotation annotationlist="https://iiif.harvardartmuseums.org/manifests/object/198021/list/48466698"></iiif-annotation>

The following example is a annotation list. The annotation list does not have a manifest in the annotation. The manifest is added manually into to the tag.
```
<iiif-annotation annotationlist="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json" manifesturl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json"></iiif-annotation>
```

<iiif-annotation annotationlist="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json" manifesturl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json"></iiif-annotation>