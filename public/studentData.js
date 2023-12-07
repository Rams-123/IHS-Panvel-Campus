// student testimonial

const studentData = [
  {
    sId: 1,
    sName: "Harshal Vanjara",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Harshal-Vanjara.webp?mtime=20220917114722&focal=none",
    sProgram: "MSc Optometry",
    sComapany: "Rivoli EyeZone",
    sPackage: "19.20 LPA",
    sComapanyImage: "assets/companyImg/rivoli.webp",
  },
  {
    sId: 1,
    sName: "Shashank Painuly ",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Shashank-Painuly.webp?mtime=20220917114722&focal=none",
    sProgram: "MSc Optometry",
    sComapany: "Center for Sight",
    sPackage: "4.20 LPA",
    sComapanyImage: "assets/companyImg/center-for-sightwebsite.webp",
  },
  {
    sId: 1,
    sName: "Siddhi Ravindra Dongare ",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/sidhi-opto.webp?mtime=20220816114024&focal=none",
    sProgram: "BSc Optometry",
    sComapany: "Dr Agarwal Eye Hospital",
    sPackage: "3.64 LPA",
    sComapanyImage: "assets/companyImg/Dr-Agarwal-Website.webp",
  },
  {
    sId: 1,
    sName: "Ruchita R Chougule",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/ruchita-raghunath-chougule.webp?mtime=20220728104828&focal=none",
    sProgram: "BSc Optometry",
    sComapany: "Lenskart",
    sPackage: "3.6 LPA",
    sComapanyImage: "assets/companyImg/Lenskart-Website.webp",
  },
  {
    sId: 1,
    sName: "Ekta Mishra",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/ekta-mishra.webp?mtime=20220729165711&focal=none",
    sProgram: "MSc Optometry",
    sComapany: "Contact care Eye Hospital",
    sPackage: "3.6 LPA",
    sComapanyImage: "assets/companyImg/Contactcare-Eye-Hospital-Website.webp",
  },
  {
    sId: 1,
    sName: "Aniket Adinath Patil",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Aniket-Adinath-Patil.webp?mtime=20220806182123&focal=none",
    sProgram: "BSc MLT",
    sComapany: "Apollo Diagnostics",
    sPackage: "3.40 LPA",
    sComapanyImage: "assets/companyImg/Apollo-Diagnostics-Website.webp",
  },
  {
    sId: 1,
    sName: "Urmila Vinayak Chavan",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/urmila-vinayak-chavan.webp?mtime=20220728104829&focal=none",
    sProgram: "BSc Optometry",
    sComapany: "Lenskart",
    sPackage: "3 LPA",
    sComapanyImage: "assets/companyImg/Lenskart-Website.webp",
  },
  {
    sId: 1,
    sName: "Rushali gaikwad",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Rushali-gaikwad.webp?mtime=20220806182123&focal=none",
    sProgram: "BSc MLTBSc MLT",
    sComapany: "Medilab diagnostic center",
    sPackage: "3 LPA",
    sComapanyImage: "assets/companyImg/Medilab-Diagnostics-Website.webp",
  },
  {
    sId: 1,
    sName: "Shaikh H. N. Ahmed",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/shaikh-hasim-nisar-ahmed.webp?mtime=20220728104828&focal=none",
    sProgram: "BSc Optometry",
    sComapany: "Titan Eye Wear Specs And Shades",
    sPackage: "3 LPA",
    sComapanyImage: "assets/companyImg/Titan-eye-plus-Website.webp",
  },
  {
    sId: 1,
    sName: "Namrata Kashyap",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Namrata-Kashyap.webp?mtime=20220917114722&focal=none",
    sProgram: "MSc Optometry",
    sComapany: "PEWS Group of Institutions",
    sPackage: "3 LPA",
    sComapanyImage: "assets/companyImg/PEWS-website.webp",
  },
  {
    sId: 1,
    sName: "Pragati Sondi",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/pragati-sondi.webp?mtime=20220816115816&focal=none",
    sProgram: "MSc Optometry",
    sComapany: "Reliance Vision Express",
    sPackage: "2.8 LPA",
    sComapanyImage: "assets/companyImg/Vision-Express-Website.webp",
  },
  {
    sId: 1,
    sName: "Kajal Singh",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/kajal-opto.webp?mtime=20220816114023&focal=none",
    sProgram: "BSc Optometry",
    sComapany: "Ojas eye hospital",
    sPackage: "2.4 LPA",
    sComapanyImage: "assets/companyImg/Ojas-Eye-hospital-Website.webp",
  },
  {
    sId: 1,
    sName: "Vikas suresh goswami",
    sImg: "https://dg1xqmhtoint1.cloudfront.net/img/ihs/lp/Student-Placement/Vikas-suresh-goswami.webp?mtime=20220806182123&focal=none",
    sProgram: "BSc MLT",
    sComapany: "SRL Diagnostics",
    sPackage: "2.04 LPA",
    sComapanyImage: "assets/companyImg/SRL-Diagnostic-Website.webp",
  },
];

let output = studentData.map(showData).join("");
let list = document.querySelector("#list");
list.innerHTML = output;

function showData(studentData) {
  let listItems = `
    <div class="flex w-72 h-full relative max-w-xs flex-col items-center pt-24 rounded-md ">
        <div class="flex w-full h-48 items-center justify-center absolute top-0 ">
            <div class="flex w-48 h-48 px-3 py-3 bg-card rounded-lg">
                <div class="flex w-full h-full rounded-md">
                    <img src="${studentData.sImg}" class="object-contain rounded-md"
                        alt="${studentData.sImg}">
                </div>
            </div>  
        </div>
        <div class="flex flex-col gap-5 px-5 py-5 pt-28 rounded-md border border-gray-300 w-full ">
            <div class="flex w-full flex-col items-center justify-center">
                <strong>${studentData.sName}</strong>
                <span
                    class="flex text-brand-red underline font-bold decoration-brand-red underline-offset-4">${studentData.sProgram}</span>
            </div>
            <div class="flex flex-col w-full h-16 items-center justify-center">
              <img src="${studentData.sComapanyImage}" class="object-contain rounded-md h-16"
              alt="${studentData.sComapanyImage}">
            </div>
        </div>
    </div>
  `;
  return listItems;
}
