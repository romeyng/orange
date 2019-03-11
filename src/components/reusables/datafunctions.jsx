import React, { Component } from 'react';

export default getFormattedDate=(rawdate)=> {
    let year = rawdate.getFullYear();

    let month = (1 + rawdate.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = rawdate.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return year + "/" + month + "/" + day;
  }