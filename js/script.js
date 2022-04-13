// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of sphere.
 */
function calculateSphere () {
  // get user input
  let radius = parseFloat(document.getElementById('radius').value)

  // calculate the volume
  let pi = Math.PI
  let volume = radius ** 3 * 4/3 * pi

  // display the results
  document.getElementById('volume').innerHTML = "The volume will be " + volume.toFixed(2) + " cm³"
}