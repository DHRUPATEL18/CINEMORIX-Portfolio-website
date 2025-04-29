document.addEventListener('scroll', ()=> {
   const nav = document.querySelector('header');
   if (window.scrollY > 0){
    header.classList.add('scrolled');
   }
   else{
    header.classList.remove('scrolled');
   }
});

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Animation/male0001.png
     ./Animation/male0002.png
     ./Animation/male0003.png
     ./Animation/male0004.png
     ./Animation/male0005.png
     ./Animation/male0006.png
     ./Animation/male0007.png
     ./Animation/male0008.png
     ./Animation/male0009.png
     ./Animation/male0010.png
     ./Animation/male0011.png
     ./Animation/male0012.png
     ./Animation/male0013.png
     ./Animation/male0014.png
     ./Animation/male0015.png
     ./Animation/male0016.png
     ./Animation/male0017.png
     ./Animation/male0018.png
     ./Animation/male0019.png
     ./Animation/male0020.png
     ./Animation/male0021.png
     ./Animation/male0022.png
     ./Animation/male0023.png
     ./Animation/male0024.png
     ./Animation/male0025.png
     ./Animation/male0026.png
     ./Animation/male0027.png
     ./Animation/male0028.png
     ./Animation/male0029.png
     ./Animation/male0030.png
     ./Animation/male0031.png
     ./Animation/male0032.png
     ./Animation/male0033.png
     ./Animation/male0034.png
     ./Animation/male0035.png
     ./Animation/male0036.png
     ./Animation/male0037.png
     ./Animation/male0038.png
     ./Animation/male0039.png
     ./Animation/male0040.png
     ./Animation/male0041.png
     ./Animation/male0042.png
     ./Animation/male0043.png
     ./Animation/male0044.png
     ./Animation/male0045.png
     ./Animation/male0046.png
     ./Animation/male0047.png
     ./Animation/male0048.png
     ./Animation/male0049.png
     ./Animation/male0050.png
     ./Animation/male0051.png
     ./Animation/male0052.png
     ./Animation/male0053.png
     ./Animation/male0054.png
     ./Animation/male0055.png
     ./Animation/male0056.png
     ./Animation/male0057.png
     ./Animation/male0058.png
     ./Animation/male0059.png
     ./Animation/male0060.png
     ./Animation/male0061.png
     ./Animation/male0062.png
     ./Animation/male0063.png
     ./Animation/male0064.png
     ./Animation/male0065.png
     ./Animation/male0066.png
     ./Animation/male0067.png
     ./Animation/male0068.png
     ./Animation/male0069.png
     ./Animation/male0070.png
     ./Animation/male0071.png
     ./Animation/male0072.png
     ./Animation/male0073.png
     ./Animation/male0074.png
     ./Animation/male0075.png
     ./Animation/male0076.png
     ./Animation/male0077.png
     ./Animation/male0078.png
     ./Animation/male0079.png
     ./Animation/male0080.png
     ./Animation/male0081.png
     ./Animation/male0082.png
     ./Animation/male0083.png
     ./Animation/male0084.png
     ./Animation/male0085.png
     ./Animation/male0086.png
     ./Animation/male0087.png
     ./Animation/male0088.png
     ./Animation/male0089.png
     ./Animation/male0090.png
     ./Animation/male0091.png
     ./Animation/male0092.png
     ./Animation/male0093.png
     ./Animation/male0094.png
     ./Animation/male0095.png
     ./Animation/male0096.png
     ./Animation/male0097.png
     ./Animation/male0098.png
     ./Animation/male0099.png
     ./Animation/male0100.png
     ./Animation/male0101.png
     ./Animation/male0102.png
     ./Animation/male0103.png
     ./Animation/male0104.png
     ./Animation/male0105.png
     ./Animation/male0106.png
     ./Animation/male0107.png
     ./Animation/male0108.png
     ./Animation/male0109.png
     ./Animation/male0110.png
     ./Animation/male0111.png
     ./Animation/male0112.png
     ./Animation/male0113.png
     ./Animation/male0114.png
     ./Animation/male0115.png
     ./Animation/male0116.png
     ./Animation/male0117.png
     ./Animation/male0118.png
     ./Animation/male0119.png
     ./Animation/male0120.png
     ./Animation/male0121.png
     ./Animation/male0122.png
     ./Animation/male0123.png
     ./Animation/male0124.png
     ./Animation/male0125.png
     ./Animation/male0126.png
     ./Animation/male0127.png
     ./Animation/male0128.png
     ./Animation/male0129.png
     ./Animation/male0130.png
     ./Animation/male0131.png
     ./Animation/male0132.png
     ./Animation/male0133.png
     ./Animation/male0134.png
     ./Animation/male0135.png
     ./Animation/male0136.png
     ./Animation/male0137.png
     ./Animation/male0138.png
     ./Animation/male0139.png
     ./Animation/male0140.png
     ./Animation/male0141.png
     ./Animation/male0142.png
     ./Animation/male0143.png
     ./Animation/male0144.png
     ./Animation/male0145.png
     ./Animation/male0146.png
     ./Animation/male0147.png
     ./Animation/male0148.png
     ./Animation/male0149.png
     ./Animation/male0150.png
     ./Animation/male0151.png
     ./Animation/male0152.png
     ./Animation/male0153.png
     ./Animation/male0154.png
     ./Animation/male0155.png
     ./Animation/male0156.png
     ./Animation/male0157.png
     ./Animation/male0158.png
     ./Animation/male0159.png
     ./Animation/male0160.png
     ./Animation/male0161.png
     ./Animation/male0162.png
     ./Animation/male0163.png
     ./Animation/male0164.png
     ./Animation/male0165.png
     ./Animation/male0166.png
     ./Animation/male0167.png
     ./Animation/male0168.png
     ./Animation/male0169.png
     ./Animation/male0170.png
     ./Animation/male0171.png
     ./Animation/male0172.png
     ./Animation/male0173.png
     ./Animation/male0174.png
     ./Animation/male0175.png
     ./Animation/male0176.png
     ./Animation/male0177.png
     ./Animation/male0178.png
     ./Animation/male0179.png
     ./Animation/male0180.png
     ./Animation/male0181.png
     ./Animation/male0182.png
     ./Animation/male0183.png
     ./Animation/male0184.png
     ./Animation/male0185.png
     ./Animation/male0186.png
     ./Animation/male0187.png
     ./Animation/male0188.png
     ./Animation/male0189.png
     ./Animation/male0190.png
     ./Animation/male0191.png
     ./Animation/male0192.png
     ./Animation/male0193.png
     ./Animation/male0194.png
     ./Animation/male0195.png
     ./Animation/male0196.png
     ./Animation/male0197.png
     ./Animation/male0198.png
     ./Animation/male0199.png
     ./Animation/male0200.png
     ./Animation/male0201.png
     ./Animation/male0202.png
     ./Animation/male0203.png
     ./Animation/male0204.png
     ./Animation/male0205.png
     ./Animation/male0206.png
     ./Animation/male0207.png
     ./Animation/male0208.png
     ./Animation/male0209.png
     ./Animation/male0210.png
     ./Animation/male0211.png
     ./Animation/male0212.png
     ./Animation/male0213.png
     ./Animation/male0214.png
     ./Animation/male0215.png
     ./Animation/male0216.png
     ./Animation/male0217.png
     ./Animation/male0218.png
     ./Animation/male0219.png
     ./Animation/male0220.png
     ./Animation/male0221.png
     ./Animation/male0222.png
     ./Animation/male0223.png
     ./Animation/male0224.png
     ./Animation/male0225.png
     ./Animation/male0226.png
     ./Animation/male0227.png
     ./Animation/male0228.png
     ./Animation/male0229.png
     ./Animation/male0230.png
     ./Animation/male0231.png
     ./Animation/male0232.png
     ./Animation/male0233.png
     ./Animation/male0234.png
     ./Animation/male0235.png
     ./Animation/male0236.png
     ./Animation/male0237.png
     ./Animation/male0238.png
     ./Animation/male0239.png
     ./Animation/male0240.png
     ./Animation/male0241.png
     ./Animation/male0242.png
     ./Animation/male0243.png
     ./Animation/male0244.png
     ./Animation/male0245.png
     ./Animation/male0246.png
     ./Animation/male0247.png
     ./Animation/male0248.png
     ./Animation/male0249.png
     ./Animation/male0250.png
     ./Animation/male0251.png
     ./Animation/male0252.png
     ./Animation/male0253.png
     ./Animation/male0254.png
     ./Animation/male0255.png
     ./Animation/male0256.png
     ./Animation/male0257.png
     ./Animation/male0258.png
     ./Animation/male0259.png
     ./Animation/male0260.png
     ./Animation/male0261.png
     ./Animation/male0262.png
     ./Animation/male0263.png
     ./Animation/male0264.png
     ./Animation/male0265.png
     ./Animation/male0266.png
     ./Animation/male0267.png
     ./Animation/male0268.png
     ./Animation/male0269.png
     ./Animation/male0270.png
     ./Animation/male0271.png
     ./Animation/male0272.png
     ./Animation/male0273.png
     ./Animation/male0274.png
     ./Animation/male0275.png
     ./Animation/male0276.png
     ./Animation/male0277.png
     ./Animation/male0278.png
     ./Animation/male0279.png
     ./Animation/male0280.png
     ./Animation/male0281.png
     ./Animation/male0282.png
     ./Animation/male0283.png
     ./Animation/male0284.png
     ./Animation/male0285.png
     ./Animation/male0286.png
     ./Animation/male0287.png
     ./Animation/male0288.png
     ./Animation/male0289.png
     ./Animation/male0290.png
     ./Animation/male0291.png
     ./Animation/male0292.png
     ./Animation/male0293.png
     ./Animation/male0294.png
     ./Animation/male0295.png
     ./Animation/male0296.png
     ./Animation/male0297.png
     ./Animation/male0298.png
     ./Animation/male0299.png
     ./Animation/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

