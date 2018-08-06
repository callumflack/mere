<template>
  <div class="u-icon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 428 100"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <title :id="iconName" lang="en">{{iconName}}</title>
      <g fill="iconColor">
        <path d="M62.25,84.5l-1.9-4.38A99.27,99.27,0,0,0,50.5,61,103.88,103.88,0,0,0,37.62,44.37,77.83,77.83,0,0,1,26.31,30,86.47,86.47,0,0,1,17.8,13.5,105.47,105.47,0,0,0,11.31,0H0V100H9.52V29.5c1.34,2.62,3.13,5.75,5.48,9.5A97.42,97.42,0,0,0,28,55.63,78.43,78.43,0,0,1,39.19,70a95.88,95.88,0,0,1,8.62,16.5A84.34,84.34,0,0,0,54.19,100H64.94L106,24.63V100h14.1V0H108.38Zm157-74V0H141.44V100h77.82V89.5H155.55V55.25h59V44.75h-59V10.5Zm96.31,60.63A54.38,54.38,0,0,1,305.15,58.5c-1.12-1.62-2-3.25-2.79-4.63,10-3.49,17.13-13.87,17.13-26.24,0-15.26-11-27.63-24.64-27.63H238.31V100h14.11V55.25h36.27a69.17,69.17,0,0,0,6.5,12.25,67.86,67.86,0,0,0,12.88,15.38c3.24,3,5.82,5.62,10.18,12.5,1,1.62,1.91,3.12,2.69,4.62h14.67c-1-3.63-3.47-8.25-7.06-13.62a66.12,66.12,0,0,0-13-15.25M290.15,44.75H252.42V10.5h37.73c8.4,0,15.23,7.75,15.23,17.13s-6.83,17.12-15.23,17.12M428,10.5V0H350.18V100H428V89.5H364.29V55.25h59V44.75h-59V10.5Z"/>
      </g>
    </svg>
  </div>
</template>

<script>
/* 

  https://vuejs.org/v2/cookbook/editable-svg-icons.html 

*/
export default {
  props: {
    iconName: {
      type: String,
      default: "Mere logo"
    },
    width: {
      type: [Number, String],
      default: 428
    },
    height: {
      type: [Number, String],
      default: 100
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>
