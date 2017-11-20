!function(e){function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var i={};n.m=e,n.c=i,n.i=function(e){return e},n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=15)}([function(e,n,i){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.events=void 0;var r=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}(),o=i(28),l=function(e){return e&&e.__esModule?e:{default:e}}(o);i(26);var _=i(27);n.default=new l.default;var d=function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),r(n,[{key:"withID",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This should not be empty";return this.name+":"+e}}]),n}(_.Enum);d.initEnum(["changeCollege","changeDegree","changeDepartment","changeGrade"]);n.events=d},function(e,n,i){"use strict";n.departmentID="ncu-unit--department",n.collegeID="ncu-unit--college",n.degreeID="ncu-unit--degree",n.gradeID="ncu-unit--grade",n.transID="ncu-unit--trans"},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i(14);n.default={props:{locale:{default:t.fallback},fallbackLocale:{default:t.fallback},i18n:{type:Object,default:function(){return t.i18n}},except:{type:Array,default:function(){return[]}},only:{type:Array,default:function(){return[]}}},methods:{$t:function(e,n){if(void 0===e)throw new Error("obj is undefined");var i=(0,t.prefixing)(this.locale,n);if(e.hasOwnProperty(i)&&e[i])return e[i];var s=(0,t.prefixing)(this.fallbackLocale,n);if(e.hasOwnProperty(s)&&e[s])return e[s];throw new Error("obj "+JSON.stringify(e)+" 沒有 "+i+" 也沒有 "+s)}},mounted:function(){"function"==typeof this.emitChange&&this.emitChange(),"function"==typeof this.afterMounted&&this.afterMounted()}}},function(e,n){e.exports=function(e,n,i,t,s){var a,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,r=e.default);var l="function"==typeof r?r.options:r;n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),t&&(l._scopeId=t);var _;if(s?(_=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=_):i&&(_=i),_){var d=l.functional,c=d?l.render:l.beforeCreate;d?l.render=function(e,n){return _.call(n),c(e,n)}:l.beforeCreate=c?[].concat(c,_):[_]}return{esModule:a,exports:r,options:l}}},function(e,n){e.exports=lodash},function(e,n,i){"use strict";e.exports=[{id:"學士班",chinese_name:"學士班",english_name:"Bachelor's degree",study_system_no:1,study_year:6},{id:"碩士班",chinese_name:"碩士班",english_name:"Master's degree",study_system_no:2,study_year:4},{id:"五年雙學位(碩士班)",chinese_name:"五年雙學位(碩士班)",english_name:"Dual master's degree",study_system_no:2,study_year:4},{id:"在職專班",chinese_name:"在職專班",english_name:"In-service master's program",study_system_no:3,study_year:4},{id:"博士班",chinese_name:"博士班",english_name:"Doctoral degree",study_system_no:4,study_year:7}]},function(e,n,i){"use strict";e.exports=[{id:"文學院",chinese_name:"文學院",english_name:"College of Liberal Arts"},{id:"理學院",chinese_name:"理學院",english_name:"College of Science"},{id:"工學院",chinese_name:"工學院",english_name:"College of Engineering"},{id:"管理學院",chinese_name:"管理學院",english_name:"College of Management"},{id:"資訊電機學院",chinese_name:"資訊電機學院",english_name:"College of Electrical Engineering and Computer Science"},{id:"地球科學學院",chinese_name:"地球科學學院",english_name:"College of Earth Sciences"},{id:"客家學院",chinese_name:"客家學院",english_name:"College of Hakka Studies"},{id:"生醫理工學院",chinese_name:"生醫理工學院",english_name:"College of Health Sciences and Technology"},{id:"中心、處室",chinese_name:"太空及遙測研究中心",english_name:"Center of Space and Remote Sensing Research"}]},function(e,n,i){"use strict";e.exports=[{id:1001,chinese_name:"中國文學系",english_name:"Department of Chinese Literature",study_system_no:1,parent_id:1001,college:"文學院"},{id:1002,chinese_name:"英美語文學系",english_name:"Department of English",study_system_no:1,parent_id:1002,college:"文學院"},{id:1003,chinese_name:"法國語文學系",english_name:"Department of French",study_system_no:1,parent_id:1003,college:"文學院"},{id:1201,chinese_name:"中國文學系",english_name:"MA in Chinese Literature",study_system_no:2,parent_id:1001,college:"文學院"},{id:1202,chinese_name:"英美語文學系",english_name:"MA in English Literature",study_system_no:2,parent_id:1002,college:"文學院"},{id:1203,chinese_name:"法國語文學系",english_name:"MA in French Literature",study_system_no:2,parent_id:1003,college:"文學院"},{id:1204,chinese_name:"哲學研究所",english_name:"Master of Philosophy",study_system_no:2,parent_id:1204,college:"文學院"},{id:1205,chinese_name:"歷史研究所",english_name:"MA in History",study_system_no:2,parent_id:1205,college:"文學院"},{id:1206,chinese_name:"藝術學研究所",english_name:"MA in Art Studies",study_system_no:2,parent_id:1206,college:"文學院"},{id:1207,chinese_name:"學習與教學研究所",english_name:"Graduate Institute of Learning & Instruction",study_system_no:2,parent_id:1207,college:"文學院"},{id:1208,chinese_name:"中國文學系戲曲碩士班",english_name:"Graduate Institute of Chinese Opera and Drama",study_system_no:2,parent_id:1001,college:"文學院"},{id:1209,chinese_name:"亞際文化研究國際碩士學位學程",english_name:"International Master‘s Program in Inter-Asia Cultural Studies",study_system_no:2,parent_id:1209,college:"文學院"},{id:1301,chinese_name:"中國文學系碩士在職專班",english_name:"MA (Adault Learning) in Chinese Literature",study_system_no:3,parent_id:1001,college:"文學院"},{id:1304,chinese_name:"哲學研究所碩士在職專班",english_name:"Master of Philosophy (Adult Learning)",study_system_no:3,parent_id:1204,college:"文學院"},{id:1305,chinese_name:"歷史研究所碩士在職專班",english_name:"MA (Adult Learning) in History",study_system_no:3,parent_id:1205,college:"文學院"},{id:1401,chinese_name:"中國文學系",english_name:"PhD in Chinese Literature",study_system_no:4,parent_id:1001,college:"文學院"},{id:1404,chinese_name:"哲學研究所",english_name:"PhD in Philosophy",study_system_no:4,parent_id:1204,college:"文學院"},{id:1407,chinese_name:"學習與教學研究所",english_name:"Graduate Institute of Learning & Instruction",study_system_no:4,parent_id:1207,college:"文學院"},{id:2001,chinese_name:"數學系",english_name:"Department of Mathematics",study_system_no:1,parent_id:2001,college:"理學院"},{id:2002,chinese_name:"物理學系",english_name:"Department of Physics",study_system_no:1,parent_id:2002,college:"理學院"},{id:2003,chinese_name:"化學學系",english_name:"Department of Chemistry",study_system_no:1,parent_id:2003,college:"理學院"},{id:2006,chinese_name:"光電科學與工程學系",english_name:"Department of Optics and Photonics",study_system_no:1,parent_id:2006,college:"理學院"},{id:2008,chinese_name:"理學院學士班",english_name:"Joint Science Program",study_system_no:1,parent_id:2008,college:"理學院"},{id:2201,chinese_name:"數學系",english_name:"MSc in Mathematics",study_system_no:2,parent_id:2001,college:"理學院"},{id:2202,chinese_name:"物理學系",english_name:"MSc in Physics",study_system_no:2,parent_id:2002,college:"理學院"},{id:2203,chinese_name:"化學學系",english_name:"MSc in Chemistry",study_system_no:2,parent_id:2003,college:"理學院"},{id:2205,chinese_name:"統計研究所",english_name:"MSc in Statistics",study_system_no:2,parent_id:2205,college:"理學院"},{id:2206,chinese_name:"光電科學與工程學系",english_name:"MSc in Optics and Photonics",study_system_no:2,parent_id:2006,college:"理學院"},{id:2209,chinese_name:"天文研究所",english_name:"MSc in Astronomy",study_system_no:2,parent_id:2209,college:"理學院"},{id:2210,chinese_name:"物理學系生物物理碩士班",english_name:"Graduate Institute of Biophysics",study_system_no:2,parent_id:2002,college:"理學院"},{id:2211,chinese_name:"系統生物與生物資訊研究所",english_name:"System Biology and Bioinformatics",study_system_no:2,parent_id:2211,college:"理學院"},{id:2212,chinese_name:"光電科學與工程學系照明與顯示科技碩士班",english_name:"Institute of Lighting and Display Science",study_system_no:2,parent_id:2006,college:"理學院"},{id:2306,chinese_name:"光電科學與工程學系碩士在職專班",english_name:"MSc in Optical Sciences in-service",study_system_no:3,parent_id:2006,college:"理學院"},{id:2401,chinese_name:"數學系",english_name:"PhD in Mathematics",study_system_no:4,parent_id:2001,college:"理學院"},{id:2402,chinese_name:"物理學系",english_name:"PhD in Physics",study_system_no:4,parent_id:2002,college:"理學院"},{id:2403,chinese_name:"化學學系",english_name:"PhD in Chemistry",study_system_no:4,parent_id:2003,college:"理學院"},{id:2405,chinese_name:"統計研究所",english_name:"PhD in Statistics",study_system_no:4,parent_id:2205,college:"理學院"},{id:2406,chinese_name:"光電科學與工程學系",english_name:"PhD in Optics and Photonics",study_system_no:4,parent_id:2006,college:"理學院"},{id:2408,chinese_name:"物理與天文研究所",english_name:"PhD in Physics and Astronomy",study_system_no:4,parent_id:2002,college:"理學院"},{id:2409,chinese_name:"天文研究所",english_name:"PhD in Astronomy",study_system_no:4,parent_id:2209,college:"理學院"},{id:2410,chinese_name:"物理學系生物物理博士班",english_name:"PhD in Biophysics",study_system_no:4,parent_id:2002,college:"理學院"},{id:2411,chinese_name:"系統生物與生物資訊研究所",english_name:"System Biology and Bioinformatics",study_system_no:4,parent_id:2211,college:"理學院"},{id:2416,chinese_name:"光電博士學位學程(台灣聯合大學系統)",english_name:"International Ph.D. Program in Photonics(University System of Taiwan)",study_system_no:4,parent_id:2416,college:"理學院"},{id:2906,chinese_name:"光電科學與工程學系光電產業研發碩士專班",english_name:"Industrial Technology R&D Master Program on Optics and Photo",study_system_no:9,parent_id:2006,college:"理學院"},{id:2907,chinese_name:"光電科學與工程學系光電產業碩士專班",english_name:"Industrial Technology Master Program on Optics and Photonics, Department of Optics and Photonics",study_system_no:9,parent_id:2006,college:"理學院"},{id:2916,chinese_name:"光電科學與工程學系光電顯示產業研發碩士專班",english_name:"Industrial Technology R&D Master Program on Photonics and Di",study_system_no:9,parent_id:2006,college:"理學院"},{id:3002,chinese_name:"土木工程學系",english_name:"Department of Civil Engineering",study_system_no:1,parent_id:3002,college:"工學院"},{id:3003,chinese_name:"機械工程學系",english_name:"Department of Mechanical Engineering",study_system_no:1,parent_id:3003,college:"工學院"},{id:3003,chinese_name:"機械工程學系光機電工程組",english_name:"Department of Mechanical Engineering Opto-Mechatronics Team",study_system_no:1,parent_id:3003,college:"工學院"},{id:3003,chinese_name:"機械工程學系先進材料與精密製造",english_name:"Department of Mechanical Engineering Advanced Materials and",study_system_no:1,parent_id:3003,college:"工學院"},{id:3003,chinese_name:"機械工程學系設計與分析組",english_name:"Department of Mechanical Engineering Design and Analysis",study_system_no:1,parent_id:3003,college:"工學院"},{id:3004,chinese_name:"化學工程與材料工程學系",english_name:"Department of Chemical Engineering",study_system_no:1,parent_id:3004,college:"工學院"},{id:3201,chinese_name:"化學工程學系",english_name:"MSc in Chemical Engineering",study_system_no:2,parent_id:3201,college:"工學院"},{id:3202,chinese_name:"土木工程學系",english_name:"MSc in Civil Engineering",study_system_no:2,parent_id:3002,college:"工學院"},{id:3203,chinese_name:"機械工程學系",english_name:"MSc in Mechanical Engineering",study_system_no:2,parent_id:3003,college:"工學院"},{id:3204,chinese_name:"化學工程與材料工程學系",english_name:"MSc in Chemical and Material Engineering",study_system_no:2,parent_id:3004,college:"工學院"},{id:3205,chinese_name:"營建管理研究所",english_name:"MSc in Construction Management",study_system_no:2,parent_id:3205,college:"工學院"},{id:3206,chinese_name:"環境工程研究所",english_name:"MSc in Environmental Engineering",study_system_no:2,parent_id:3206,college:"工學院"},{id:3207,chinese_name:"機械工程學系光機電工程碩士班",english_name:"MSc in Opto-Mechatronics Engineering",study_system_no:2,parent_id:3207,college:"工學院"},{id:3208,chinese_name:"能源工程研究所",english_name:"MSc in Energy Engineering",study_system_no:2,parent_id:3208,college:"工學院"},{id:3209,chinese_name:"材料科學與工程研究所",english_name:"Institute of Materials Science and Engineering",study_system_no:2,parent_id:3209,college:"工學院"},{id:3212,chinese_name:"應用材料科學國際研究生碩士學位學程",english_name:"International Master Degree Program in Applied Materials Science",study_system_no:2,parent_id:3212,college:"工學院"},{id:3302,chinese_name:"土木工程學碩士在職專班",english_name:"MSc in Civil Engineering in-service",study_system_no:3,parent_id:3002,college:"工學院"},{id:3303,chinese_name:"機械工程學系碩士在職專班",english_name:"MSc(Adult Learning) in Mechanical Engineering",study_system_no:3,parent_id:3003,college:"工學院"},{id:3305,chinese_name:"營建管理研究所碩士在職專班",english_name:"MSc in Construction Engineering and Manageme",study_system_no:3,parent_id:3205,college:"工學院"},{id:3306,chinese_name:"環境工程研究所碩士在職專班",english_name:"MSc (Adult Learning) in Environmental Engineering",study_system_no:3,parent_id:3206,college:"工學院"},{id:3306,chinese_name:"環境工程研究所碩士在職專班甲組",english_name:"MSc (Adult Learning) in Environmental Engineering-A",study_system_no:3,parent_id:3306,college:"工學院"},{id:3306,chinese_name:"環境工程研究所碩士在職專班乙組",english_name:"MSc (Adult Learning) in Environmental Engineering-B",study_system_no:3,parent_id:3306,college:"工學院"},{id:3306,chinese_name:"環境工程研究所碩士在職專班丙組",english_name:"MSc(Adult Learning) in Environmental Engineering-C",study_system_no:3,parent_id:3306,college:"工學院"},{id:3310,chinese_name:"國際永續發展碩士在職專班",english_name:"International Master Program for Environment Sustainable Development",study_system_no:3,parent_id:3310,college:"工學院"},{id:3401,chinese_name:"化學工程學系",english_name:"PhD in Chemical Engineering",study_system_no:4,parent_id:3401,college:"工學院"},{id:3402,chinese_name:"土木工程學系",english_name:"PhD in Civil Engineering",study_system_no:4,parent_id:3002,college:"工學院"},{id:3403,chinese_name:"機械工程學系",english_name:"PhD in Mechanical Engineering",study_system_no:4,parent_id:3003,college:"工學院"},{id:3403,chinese_name:"機械工程學系博士班(甲組)",english_name:"PhD in Mechanical Engineering",study_system_no:4,parent_id:3003,college:"工學院"},{id:3404,chinese_name:"化學工程與材料工程學系",english_name:"PhD in Chemical and Material Engineering",study_system_no:4,parent_id:3004,college:"工學院"},{id:3405,chinese_name:"營建管理研究所",english_name:"PhD in Construction Management",study_system_no:4,parent_id:3205,college:"工學院"},{id:3406,chinese_name:"環境工程研究所",english_name:"PhD in Environmental Engineering",study_system_no:4,parent_id:3206,college:"工學院"},{id:3407,chinese_name:"機械工程學系光機電工程博士班",english_name:"MSc in Opto-Mechatronics Engineering",study_system_no:4,parent_id:3207,college:"工學院"},{id:3408,chinese_name:"能源工程研究所",english_name:"PhD in Energy Engineering",study_system_no:4,parent_id:3208,college:"工學院"},{id:3409,chinese_name:"材料科學與工程研究所",english_name:"PhD of Materials Science and Engineering",study_system_no:4,parent_id:3209,college:"工學院"},{id:3901,chinese_name:"化學工程與材料工程學系積體電路載板產業研發碩士專班",english_name:"Industrial Technology R&D Master Program on Integrated Circu",study_system_no:9,parent_id:3004,college:"工學院"},{id:3903,chinese_name:"機電整合產業研發碩士專班",english_name:"Industrial Technology R&D Master Program on Mechatronics, De",study_system_no:9,parent_id:3003,college:"工學院"},{id:3904,chinese_name:"半導體製程及材料產業研發碩士專班",english_name:"MSc in Industry Development of Semiconductor Material and Pr",study_system_no:9,parent_id:3004,college:"工學院"},{id:3905,chinese_name:"機械工程學系資通產業研發碩士專班",english_name:"機械工程學系資通產業",study_system_no:9,parent_id:3003,college:"工學院"},{id:4001,chinese_name:"企業管理學系",english_name:"Department of Business Administration",study_system_no:1,parent_id:4001,college:"管理學院"},{id:4003,chinese_name:"資訊管理學系",english_name:"Department of Information Management",study_system_no:1,parent_id:4003,college:"管理學院"},{id:4008,chinese_name:"財務金融學系",english_name:"Department of Finance",study_system_no:1,parent_id:4008,college:"管理學院"},{id:4009,chinese_name:"經濟學系",english_name:"Department of Economics",study_system_no:1,parent_id:4009,college:"管理學院"},{id:4201,chinese_name:"企業管理學系",english_name:"Master of Business Administration",study_system_no:2,parent_id:4001,college:"管理學院"},{id:4203,chinese_name:"資訊管理學系",english_name:"Master of Information Management",study_system_no:2,parent_id:4003,college:"管理學院"},{id:4204,chinese_name:"產業經濟研究所",english_name:"Master of Industrial Economics",study_system_no:2,parent_id:4204,college:"管理學院"},{id:4205,chinese_name:"財務管理學系",english_name:"Master of Finance",study_system_no:2,parent_id:4205,college:"管理學院"},{id:4206,chinese_name:"工業管理研究所",english_name:"Master of Industrial Management",study_system_no:2,parent_id:4206,college:"管理學院"},{id:4207,chinese_name:"人力資源管理研究所",english_name:"Master of Human Resource Management",study_system_no:2,parent_id:4207,college:"管理學院"},{id:4208,chinese_name:"財務金融學系",english_name:"Master of Finance",study_system_no:2,parent_id:4008,college:"管理學院"},{id:4209,chinese_name:"經濟學系",english_name:"Master of Economics",study_system_no:2,parent_id:4009,college:"管理學院"},{id:4210,chinese_name:"會計研究所",english_name:"Msc of Accounting",study_system_no:2,parent_id:4210,college:"管理學院"},{id:4211,chinese_name:"英語商業管理碩士學位學程",english_name:"International Master of Science in Business Program",study_system_no:2,parent_id:4211,college:"管理學院"},{id:4300,chinese_name:"管理學院高階企管碩士專班",english_name:"Executive Master of Business Administration",study_system_no:3,parent_id:4300,college:"管理學院"},{id:4300,chinese_name:"管理學院高階企管碩士專班(甲組)",english_name:"Executive Master of Business Administration Team A",study_system_no:3,parent_id:4300,college:"管理學院"},{id:4300,chinese_name:"管理學院高階企管碩士專班(乙組)",english_name:"Executive Master of Business Administration Team B",study_system_no:3,parent_id:4300,college:"管理學院"},{id:4300,chinese_name:"管理學院高階企管碩士專班(丙組)",english_name:"Executive Master of Business Administration Team C",study_system_no:3,parent_id:4300,college:"管理學院"},{id:4300,chinese_name:"管理學院高階企管碩士專班(丁組)",english_name:"Executive Master of Business Administration Team D",study_system_no:3,parent_id:4300,college:"管理學院"},{id:4301,chinese_name:"企業管理學系碩士在職專班",english_name:"EMBA",study_system_no:3,parent_id:4001,college:"管理學院"},{id:4303,chinese_name:"資訊管理學系碩士在職專班",english_name:"Master of Information Management in-service",study_system_no:3,parent_id:4003,college:"管理學院"},{id:4304,chinese_name:"產業經濟研究所碩士在職專班",english_name:"Master of Industrial Economics in-service",study_system_no:3,parent_id:4204,college:"管理學院"},{id:4306,chinese_name:"工業管理研究所碩士在職專班",english_name:"Master of Industrial Management in-service",study_system_no:3,parent_id:4206,college:"管理學院"},{id:4307,chinese_name:"人力資源管理碩士在職專班",english_name:"Master of Human Resource Management in-service",study_system_no:3,parent_id:4207,college:"管理學院"},{id:4308,chinese_name:"財務金融學系碩士在職專班",english_name:"Master of Finance in-service",study_system_no:3,parent_id:4008,college:"管理學院"},{id:4310,chinese_name:"會計研究所企業資源規劃會計碩士在職專班",english_name:"會計研究所企業資源規劃會計碩士在職專班",study_system_no:3,parent_id:4210,college:"管理學院"},{id:4401,chinese_name:"企業管理學系",english_name:"PhD in Business Administration",study_system_no:4,parent_id:4001,college:"管理學院"},{id:4403,chinese_name:"資訊管理學系",english_name:"PhD in Information Management",study_system_no:4,parent_id:4003,college:"管理學院"},{id:4404,chinese_name:"產業經濟研究所",english_name:"PhD in Industrial Economics",study_system_no:4,parent_id:4204,college:"管理學院"},{id:4405,chinese_name:"財務管理學系",english_name:"PhD in Finance",study_system_no:4,parent_id:4405,college:"管理學院"},{id:4406,chinese_name:"工業管理研究所",english_name:"PhD in Industrial Management",study_system_no:4,parent_id:4206,college:"管理學院"},{id:4407,chinese_name:"人力資源管理研究所",english_name:"PhD in Human Resource Management",study_system_no:4,parent_id:4207,college:"管理學院"},{id:4408,chinese_name:"財務金融學系",english_name:"PhD in Finance",study_system_no:4,parent_id:4008,college:"管理學院"},{id:4409,chinese_name:"經濟學系",english_name:"PhD in Economics",study_system_no:4,parent_id:4009,college:"管理學院"},{id:4501,chinese_name:"英語商業管理碩士學位學程",english_name:"Master of Business Administration Degree Program",study_system_no:2,parent_id:4501,college:"管理學院"},{id:5001,chinese_name:"電機工程學系",english_name:"Department of Electrical Engineering",study_system_no:1,parent_id:5001,college:"資訊電機學院"},{id:5002,chinese_name:"資訊工程學系",english_name:"Department of Computer Science and Elec. Engineering",study_system_no:1,parent_id:5002,college:"資訊電機學院"},{id:5003,chinese_name:"通訊工程學系",english_name:"Department of Communication Engineering",study_system_no:1,parent_id:5003,college:"資訊電機學院"},{id:5201,chinese_name:"電機工程學系",english_name:"MSc in Electrical Engineering",study_system_no:2,parent_id:5001,college:"資訊電機學院"},{id:5202,chinese_name:"資訊工程學系",english_name:"MSc in Computer Science and Information Engineering",study_system_no:2,parent_id:5002,college:"資訊電機學院"},{id:5203,chinese_name:"通訊工程學系",english_name:"MSc in Communication Engineering",study_system_no:2,parent_id:5003,college:"資訊電機學院"},{id:5204,chinese_name:"網路學習科技研究所",english_name:"Graduate Institute of Network Learning Technology",study_system_no:2,parent_id:5204,college:"資訊電機學院"},{id:5205,chinese_name:"資訊工程學系軟體工程碩士班",english_name:"Institute of Software Engineering",study_system_no:2,parent_id:5205,college:"資訊電機學院"},{id:5301,chinese_name:"電機工程學系碩士在職專班",english_name:"MSc (Adult Learning) in Electrical Engineering",study_system_no:3,parent_id:5001,college:"資訊電機學院"},{id:5302,chinese_name:"資訊工程學系碩士在職專班",english_name:"MSc in Computer Science and Information Engineering in-servi",study_system_no:3,parent_id:5002,college:"資訊電機學院"},{id:5303,chinese_name:"通訊工程學系碩士在職專班",english_name:"MSc (Adult Learning) in Communication Engineering",study_system_no:3,parent_id:5003,college:"資訊電機學院"},{id:5304,chinese_name:"網路學習科技研究所碩士在職專班",english_name:"MSc (Adult Learning) in Network Learning Technology",study_system_no:3,parent_id:5204,college:"資訊電機學院"},{id:5401,chinese_name:"電機工程學系",english_name:"PhD in Electrical Engineering",study_system_no:4,parent_id:5001,college:"資訊電機學院"},{id:5402,chinese_name:"資訊工程學系",english_name:"PhD in Computer Science and Information Engineering",study_system_no:4,parent_id:5002,college:"資訊電機學院"},{id:5403,chinese_name:"通訊工程學系",english_name:"PhD in Communication Engineering",study_system_no:4,parent_id:5003,college:"資訊電機學院"},{id:5404,chinese_name:"網路學習科技研究所",english_name:"PhD in Institute of Network Learning Technology",study_system_no:4,parent_id:5204,college:"資訊電機學院"},{id:5901,chinese_name:"電機工程學系IC設計產業研發碩士專班",english_name:"Master Degree Program in IC Design of Electrical Engineering",study_system_no:9,parent_id:5001,college:"資訊電機學院"},{id:5902,chinese_name:"資訊工程學系嵌入式系統產業研發碩士專班",english_name:"Industrial Technology R & D Master Program for Embedded Syst",study_system_no:9,parent_id:5002,college:"資訊電機學院"},{id:5903,chinese_name:"電機工程學系通訊暨微波半導體製程研發產業研發碩士專班",english_name:"電機工程學系通訊暨微波半導體製程研發產業研發碩士專班",study_system_no:9,parent_id:5001,college:"資訊電機學院"},{id:5904,chinese_name:"資電學院嵌入式系統產業研發碩士外國學生專班",english_name:"Industrial Technology Research and Development Master Program on Embedded Systems, College of Elect",study_system_no:9,parent_id:5001,college:"資訊電機學院"},{id:5911,chinese_name:"電機工程學系電子組產業研發碩士專班",english_name:"Industrial Technology R&D Master Program on Microelectronics",study_system_no:9,parent_id:5001,college:"資訊電機學院"},{id:6001,chinese_name:"大氣科學學系",english_name:"Department of Atmospheric Physics",study_system_no:1,parent_id:6001,college:"地球科學學院"},{id:6001,chinese_name:"大氣科學學系(大氣組)",english_name:"Atmospheric Science Program , Department of Atmospheric Scie",study_system_no:1,parent_id:6001,college:"地球科學學院"},{id:6001,chinese_name:"大氣科學學系(太空組)",english_name:"Space Science Program , Department of Atmospheric Sciences",study_system_no:1,parent_id:6001,college:"地球科學學院"},{id:6002,chinese_name:"地球科學學系",english_name:"Department of Geophysics",study_system_no:1,parent_id:6002,college:"地球科學學院"},{id:6201,chinese_name:"大氣科學學系大氣物理碩士班",english_name:"MSc in Atmospheric Physics",study_system_no:2,parent_id:6001,college:"地球科學學院"},{id:6202,chinese_name:"地球科學學系地球物理碩士班",english_name:"MSc in Geophysics",study_system_no:2,parent_id:6002,college:"地球科學學院"},{id:6203,chinese_name:"太空科學研究所",english_name:"MSc in Space Sciences",study_system_no:2,parent_id:6203,college:"地球科學學院"},{id:6204,chinese_name:"應用地質研究所",english_name:"MSc in Applied Geology",study_system_no:2,parent_id:6204,college:"地球科學學院"},{id:6205,chinese_name:"水文科學研究所",english_name:"MSc in Hydrologocal Sciences",study_system_no:2,parent_id:6206,college:"地球科學學院"},{id:6206,chinese_name:"水文與海洋科學研究所",english_name:"MSc in Hydrologocal and Oceanic Sciences",study_system_no:2,parent_id:6206,college:"地球科學學院"},{id:6401,chinese_name:"大氣科學學系大氣物理",english_name:"PhD in Atmospheric Physics",study_system_no:4,parent_id:6001,college:"地球科學學院"},{id:6402,chinese_name:"地球科學學系地球物理",english_name:"PhD in Geophysics",study_system_no:4,parent_id:6002,college:"地球科學學院"},{id:6403,chinese_name:"太空科學研究所",english_name:"PhD in Space Sciences",study_system_no:4,parent_id:6203,college:"地球科學學院"},{id:6404,chinese_name:"應用地質研究所",english_name:"PhD in Applied Geology",study_system_no:4,parent_id:6204,college:"地球科學學院"},{id:6405,chinese_name:"水文科學研究所",english_name:"PhD in Hydrologocal Sciences",study_system_no:4,parent_id:6206,college:"地球科學學院"},{id:6406,chinese_name:"水文與海洋科學研究所",english_name:"PhD in Hydrologocal and Oceanic Sciences",study_system_no:4,parent_id:6206,college:"地球科學學院"},{id:6410,chinese_name:"地球系統科學國際研究生博士學位學程",english_name:"International Ph.D. Graduate Program for Earth System Science",study_system_no:4,parent_id:6410,college:"地球科學學院"},{id:7007,chinese_name:"客家語文暨社會科學學系",english_name:"Department of Hakka Language and Social Sciences",study_system_no:1,parent_id:7007,college:"客家學院"},{id:7204,chinese_name:"法律與政府研究所碩士班",english_name:"Institute of Law and Government",study_system_no:2,parent_id:7204,college:"客家學院"},{id:7207,chinese_name:"客家語文暨社會科學學系客家社會文化碩士班",english_name:"Master Program in Hakka Social and Cultural Studies , Department of Hakka Language and Social Sciences",study_system_no:2,parent_id:7207,college:"客家學院"},{id:7208,chinese_name:"客家語文暨社會科學學系客家語文碩士班",english_name:"Master Program in Hakka Language and Literature, Department of Hakka Language and Social Sciences",study_system_no:2,parent_id:7208,college:"客家學院"},{id:7209,chinese_name:"客家語文暨社會科學學系客家政治經濟碩士班",english_name:"Master Program of Hakka political economy, Department of Hakka Language and Social Sciences",study_system_no:2,parent_id:7209,college:"客家學院"},{id:7305,chinese_name:"客家政治經濟與政策研究所碩士在職專班",english_name:"Executive Master of Hakka Political Economy and Policy Studi",study_system_no:3,parent_id:7306,college:"客家學院"},{id:7307,chinese_name:"客家語文暨社會科學學系客家研究碩士在職專班",english_name:"The Executive Master Program of Hakka Studies,Department of Hakka Language and Social Sciences",study_system_no:3,parent_id:7307,college:"客家學院"},{id:7407,chinese_name:"客家語文暨社會科學學系客家研究博士班",english_name:"Ph.D. Program of Hakka Studies, Department of Hakka Language and Social Sciences",study_system_no:4,parent_id:7407,college:"客家學院"},{id:7601,chinese_name:"公共事務與族群研究博士學位學程",english_name:"Ph.D. Program of Public Affairs and　Ethnic Studies",study_system_no:4,parent_id:7601,college:"客家學院"},{id:8001,chinese_name:"生命科學系",english_name:"Department of Life Sciences",study_system_no:1,parent_id:8001,college:"生醫理工學院"},{id:8002,chinese_name:"生醫科學與工程學系",english_name:"Department of Biomedical Sciences and Engineering",study_system_no:1,parent_id:8002,college:"生醫理工學院"},{id:8201,chinese_name:"生命科學系",english_name:"MSc in Life Science",study_system_no:2,parent_id:8001,college:"生醫理工學院"},{id:8205,chinese_name:"認知神經科學研究所",english_name:"Graduate Institute of Cognitive Neuroscience",study_system_no:2,parent_id:8205,college:"生醫理工學院"},{id:8208,chinese_name:"跨領域轉譯醫學研究所",english_name:"Graduate Institute of Translational and Interdisciplinary Medicine",study_system_no:2,parent_id:8208,college:"生醫理工學院"},{id:8210,chinese_name:"生醫科學與工程學系系統生物與生物資訊碩士班",english_name:"Master Program in Systems Biology and Bioinformatics, Department of Biomedical Sciences and Engineering",study_system_no:2,parent_id:8210,college:"生醫理工學院"},{id:8211,chinese_name:"生醫科學與工程學系生物醫學工程碩士班",english_name:"Master Program in Biomedical Engineering, Department of Biomedical Sciences and Engineering",study_system_no:2,parent_id:8211,college:"生醫理工學院"},{id:8401,chinese_name:"生命科學系",english_name:"PhD in Life Science",study_system_no:4,parent_id:8001,college:"生醫理工學院"},{id:8405,chinese_name:"認知神經科學研究所",english_name:"Graduate Institute of Cognitive Neuroscience",study_system_no:4,parent_id:8205,college:"生醫理工學院"},{id:8408,chinese_name:"生醫科學與工程學系跨領域轉譯醫學博士班",english_name:"PhD in Institute of Translational and Interdisciplinary Medicine",study_system_no:4,parent_id:8208,college:"生醫理工學院"},{id:8409,chinese_name:"跨領域神經科學博士學位學程(台灣聯合大學系統)",english_name:"International Ph.D. program in Interdisciplinary neuroscience (University System of Taiwan)",study_system_no:4,parent_id:8409,college:"生醫理工學院"},{id:8410,chinese_name:"生醫科學與工程學系系統生物與生物資訊博士班",english_name:"Ph.D. Program of Systems Biology and Bioinformatics, Department of Biomedical Sciences and Engineering",study_system_no:4,parent_id:8210,college:"生醫理工學院"},{id:8411,chinese_name:"生醫科學與工程學系生物醫學工程博士班",english_name:"Ph.D. Program of Biomedical Engineering, Department of Biomedical Sciences and Engineering",study_system_no:4,parent_id:8211,college:"生醫理工學院"},{id:202,chinese_name:"遙測科技碩士學位學程",english_name:"Master of Science Program in Remote Sensing Science and Technology",study_system_no:2,parent_id:202,college:"中心、處室"},{id:403,chinese_name:"環境科技博士學位學程(台灣聯合大學系統)",english_name:"International Ph.D. Program in Environmental Science and Technology(UST-EST)",study_system_no:4,parent_id:403,college:"中心、處室"}]},function(e,n,i){"use strict";n.College=i(16),n.Department=i(18),n.Degree=i(17),n.Grade=i(19),n.Trans=i(20)},function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(4),a=i(6),r=t(a),o=i(0),l=t(o),_=i(1),d=i(2),c=t(d);n.default={props:{defaults:{type:String,default:r.default[0].id},id:{type:String,default:_.collegeID},name:{type:String,default:"college"}},mixins:[c.default],data:function(){return{colleges:r.default,selected:this.defaults}},methods:{emitChange:function(){var e=(0,s.keyBy)(this.colleges,"id")[this.selected];l.default.$emit(o.events.changeCollege.withID(this.id),{college:e})}}}},function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(4),a=i(5),r=t(a),o=i(0),l=t(o),_=i(1),d=i(2),c=t(d);n.default={props:{defaults:{type:String,default:r.default[0].id},id:{type:String,default:_.degreeID},name:{type:String,default:"degree"}},mixins:[c.default],data:function(){return{degrees:r.default,selected:this.defaults}},methods:{emitChange:function(){var e=(0,s.keyBy)(this.degrees,"id")[this.selected];l.default.$emit(o.events.changeDegree.withID(this.id),{degree:e})}}}},function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(4),a=i(5),r=t(a),o=i(6),l=t(o),_=i(7),d=t(_),c=i(0),m=t(c),g=i(1),u=i(2),h=t(u);n.default={props:{id:{type:String,default:g.departmentID},name:{type:String,default:"department"},defaults:{type:[String,Number],default:d.default[0].id},filtering:{type:Object,default:function(){return{college:l.default[0].id,degree:r.default[0].id}}},listenToCollege:{type:String,default:g.collegeID},listenToDegree:{type:String,default:g.degreeID}},mixins:[h.default],data:function(){return this.except.sort(),{departments:d.default,selected:this.defaults,filter:this.filtering}},computed:{filtered:function(){var e=this,n=r.default.filter(function(n){return n.id===e.filter.degree})[0],i=n&&n.study_system_no||-1,t=this.departments.filter(function(n){return void 0===e.filter.college||n.college===e.filter.college}).filter(function(n){return void 0===e.filter.degree||n.study_system_no==i}).filter(function(n){return!e.except.includes(n.id)});return 0!==this.only.length&&(t=t.filter(function(n){return e.only.includes(n.id)})),t}},methods:{emitChange:function(){var e=(0,s.keyBy)(this.departments,"id")[this.selected];m.default.$emit(c.events.changeDepartment.withID(this.id),{department:e})},afterMounted:function(){var e=this;m.default.$on(c.events.changeCollege.withID(this.listenToCollege),function(n){e.filter.college=n.college.id,e.resetSelected()}),m.default.$on(c.events.changeDegree.withID(this.listenToDegree),function(n){e.filter.degree=n.degree.id,e.resetSelected()})},resetSelected:function(){var e=this.filtered;this.selected=0==e.length?"":e[0].id}}}},function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(5),a=t(s),r=i(0),o=t(r),l=i(1),_=i(2),d=t(_);n.default={props:{id:{type:String,default:l.gradeID},name:{type:String,default:"grade"},defaults:{type:String,default:"1"},degree:{type:String,default:a.default[0].id},listenToDegree:{type:String,default:l.degreeID}},mixins:[d.default],data:function(){return{grade:this.defaults,degree_id:this.degree}},computed:{years:function(){var e=this,n=a.default.filter(function(n){return n.id===e.degree_id})[0];if(!n&&!n.study_year)throw new Error("不存在該學位，degree id="+this.degree_id);return n.study_year}},methods:{emitChange:function(){o.default.$emit(r.events.changeGrade.withID(this.id),{grade:this.grade})},afterMounted:function(){var e=this;o.default.$on(r.events.changeDegree.withID(this.listenToDegree),function(n){e.degree_id=n.degree.id})}}}},function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(4),a=i(5),r=t(a),o=i(6),l=t(o),_=i(7),d=t(_),c=i(1),m=i(2),g=t(m);n.default={props:{id:{type:String,default:c.transID},type:String,transId:{type:[String,Number],required:!0}},mixins:[g.default],data:function(){return{degrees:(0,s.keyBy)(r.default,"id"),colleges:(0,s.keyBy)(l.default,"id"),departments:(0,s.keyBy)(d.default,"id")}},computed:{translated:function(){switch(this.type){case"degree":return this.trans(this.degrees);case"college":return this.trans(this.colleges);case"department":return this.trans(this.departments);default:throw new Error("無法將id "+this.transId+" 翻譯成類型 "+this.type)}}},methods:{trans:function(e){return this.$t(e[this.transId],"name")}}}},function(e,n,i){"use strict";function t(e,n){return a[e].prefix+"_"+n}Object.defineProperty(n,"__esModule",{value:!0}),n.i18n=n.names=n.fallback=void 0,n.prefixing=t;var s=i(4),a={en:{name:"en",prefix:"english"},"zh-TW":{name:"zh-TW",prefix:"chinese"}};n.default=a;n.fallback="zh-TW",n.names=(0,s.map)(a,"name"),n.i18n={college:{chinese_name:"學院",english_name:"College"},department:{chinese_name:"系所",english_name:"Department"},degree:{chinese_name:"學級",english_name:"Degree"},grade:{chinese_name:"年級",english_name:"Grade"}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.events=n.bus=void 0;var t=i(0),s=function(e){return e&&e.__esModule?e:{default:e}}(t);n.default=i(8);n.bus=s.default,n.events=t.events},function(e,n,i){var t=i(3)(i(9),i(24),null,null,null);e.exports=t.exports},function(e,n,i){var t=i(3)(i(10),i(23),null,null,null);e.exports=t.exports},function(e,n,i){var t=i(3)(i(11),i(21),null,null,null);e.exports=t.exports},function(e,n,i){var t=i(3)(i(12),i(22),null,null,null);e.exports=t.exports},function(e,n,i){var t=i(3)(i(13),i(25),null,null,null);e.exports=t.exports},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"ncu-unit ncu-unit--department",attrs:{id:e.id,name:e.name,title:e.$t(e.i18n.department,"name")},on:{change:[function(n){var i=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=n.target.multiple?i:i[0]},e.emitChange]}},e._l(e.filtered,function(n){return i("option",{key:n.id+n.chinese_name,domProps:{value:n.id}},[e._v(e._s(e.$t(n,"name")))])}))},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("select",{directives:[{name:"model",rawName:"v-model",value:e.grade,expression:"grade"}],staticClass:"ncu-unit ncu-unit--grade",attrs:{id:e.id,name:e.name,title:e.$t(e.i18n.grade,"name")},on:{change:function(n){var i=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.grade=n.target.multiple?i:i[0]}}},e._l(e.years,function(n){return i("option",{key:"grade"+n,domProps:{value:n}},[e._v(e._s(n))])}))},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"ncu-unit ncu-unit--degree",attrs:{id:e.id,name:e.name,title:e.$t(e.i18n.degree,"name")},on:{change:[function(n){var i=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=n.target.multiple?i:i[0]},e.emitChange]}},e._l(e.degrees,function(n){return i("option",{key:n.id,attrs:{"data-study_year":n.study_year},domProps:{value:n.id}},[e._v(e._s(e.$t(n,"name")))])}))},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"ncu-unit ncu-unit--college",attrs:{id:e.id,name:e.name,title:e.$t(e.i18n.college,"name")},on:{change:[function(n){var i=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=n.target.multiple?i:i[0]},e.emitChange]}},e._l(e.colleges,function(n){return i("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(e.$t(n,"name")))])}))},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("span",{staticClass:"ncu-unit ncu-unit--trans",attrs:{id:e.id,title:e.$t(e.i18n[e.type],"name")}},[e._v(e._s(e.translated))])},staticRenderFns:[]}},function(e,n){e.exports=babel-polyfill},function(e,n){e.exports=enumify},function(e,n){e.exports=vue}]);
//# sourceMappingURL=components.js.map