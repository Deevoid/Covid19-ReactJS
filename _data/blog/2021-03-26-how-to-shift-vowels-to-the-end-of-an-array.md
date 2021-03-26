---
template: BlogPost
path: /shift-vowels-at-end
date: 2021-03-26T19:52:50.574Z
title: How to shift vowels to the end of an array
metaDescription: ''
thumbnail: /assets/blog-bg.svg
---
<!--StartFragment-->

constarr='visual'.split('');

constvowels='aeiou'.split('');

console.log(arr);

letj=0;

for(leti=0;i<arr.length;i++) {

if(!vowels.find((v)=>v===arr\[i])) {

vow=arr\[j];

arr\[j]=arr\[i];

arr\[i]=vow;

j++

}

}

console.log(arr);

<!--EndFragment-->
