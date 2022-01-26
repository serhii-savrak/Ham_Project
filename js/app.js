"use strict";

const servicesTabs = [...document.querySelectorAll(".services-tabs-title")];
const servicesItemsContent = [
  ...document.querySelectorAll(".services-list-item"),
];
const companyWorksTabsContent = document.querySelector(
  ".company-works-tabs-content"
);
const reviewsContentItems = [...document.querySelectorAll(".reviews-tab")];
const reviewListItems = [...document.querySelectorAll(".review-list-item")];
let readyToInsertPicsArray = [];
let readyToInsertPicsArray2 = [];
let readyToInsertPicsGalleryArray = [];
let currentListItem;
let currentContentItem;
let currentListItemId;
let currentIndexOfListItemInArray;
let countBtnPress = 1; // load more btn, loads 24 pics

// console.log(currentIndexOfListItemInArray);

document.addEventListener("click", function clickHandler(e) {
  // our services section
  // tabs section
  if (e.target.classList.contains("services-tabs-title")) {
    const currentBtn = e.target;
    const currentBtnId = e.target.id;
    const currentContentTab = document.querySelector(
      `[data-tab="${currentBtnId}"]`
    );

    servicesTabs.forEach((tab) => {
      tab.classList.remove("active-services-tab");
    });

    servicesItemsContent.forEach((content) => {
      content.classList.remove("active-service-item");
    });

    currentBtn.classList.add("active-services-tab");
    currentContentTab.classList.add("active-service-item");
  }

  // filter section

  const companyWorksSectionTabs = [
    ...document.querySelectorAll(".company-works-tabs-title"),
  ];

  const worksTabsContent = [
    ...document.querySelectorAll(".company-works-tabs-content li"),
  ];

  if (e.target.classList.contains("company-works-tabs-title")) {
    const currentBtn = e.target;
    const currentBtnId = e.target.id;
    const currentImgsContent = document.querySelectorAll(
      `[data-works="${currentBtnId}"]`
    );
    const currentImgsAll = document.querySelectorAll(
      `[data-all-works="${currentBtnId}"]`
    );

    companyWorksSectionTabs.forEach((work) => {
      work.classList.remove("active-works-tab");
    });

    worksTabsContent.forEach((tab) => {
      tab.classList.remove("active");
    });

    currentImgsContent.forEach((img) => {
      img.classList.add("active");
    });

    currentImgsAll.forEach((img) => {
      img.classList.add("active");
    });

    currentBtn.classList.add("active-works-tab");
  }

  // EXTRA PICS SECTION => company-works-section

  if (e.target.closest(".btn-load-more.works")) {
    e.preventDefault();
    if (countBtnPress === 1) {
      const arrayOfWorksPics = [
        "wordpress5.jpg",
        "wordpress6.jpg",
        "wordpress7.jpg",
        "wordpress8.jpg",
        "web-design5.jpg",
        "web-design6.jpg",
        "web-design7.jpg",
        "web-design8.jpg",
        "landing-page5.jpg",
        "landing-page6.jpg",
        "landing-page7.jpg",
        "landing-page8.jpg",
        "graphic-design5.jpg",
        "graphic-design6.jpg",
        "graphic-design7.jpg",
        "graphic-design8.jpg",
      ];
      const companyBtnsContainer = document.querySelector(
        ".company-works-section .company-btns-container"
      );
      const btnLoadMoreWrapper = companyBtnsContainer.querySelector(
        ".btn-load-more-wrapper"
      );
      const btnAnimationWrapper = companyBtnsContainer.querySelector(
        ".btn-animation-wrapper"
      );
      let countWordpressPics = 5;
      let countWebDesignPics = 5;
      let countLandingPics = 5;
      let countGraphicDesignPics = 5;

      btnLoadMoreWrapper.style.color = "#18cfab";
      btnAnimationWrapper.style.display = "block";

      setTimeout(() => {
        arrayOfWorksPics.forEach((picture) => {
          if (picture.includes("wordpress")) {
            const newWordPressObj = `<li data-works="company_works_tab_4" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/wordpress/${picture}" alt="wordpress-pic-${countWordpressPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Wordpress</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countWordpressPics++;
            readyToInsertPicsArray.push(newWordPressObj);
          } else if (picture.includes("landing")) {
            const newLandingPageObj = `<li data-works="company_works_tab_3" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/landing-page/${picture}" alt="landing-page-${countLandingPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Landing Pages</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countLandingPics++;
            readyToInsertPicsArray.push(newLandingPageObj);
          } else if (picture.includes("graphic")) {
            const newGraphicDesignObj = `<li data-works="company_works_tab_1" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/graphic-design/${picture}" alt="graphic-design-${countGraphicDesignPics}"
                class="company-work-img" width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Graphic Design</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countGraphicDesignPics++;
            readyToInsertPicsArray.push(newGraphicDesignObj);
          } else if (picture.includes("web")) {
            const newWebDesignObj = `<li data-works="company_works_tab_2" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/web-design/${picture}" alt="web-design-${countWebDesignPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Web Design</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countWebDesignPics++;
            readyToInsertPicsArray.push(newWebDesignObj);
          }
        });

        companyWorksTabsContent.insertAdjacentHTML(
          "beforeend",
          `${readyToInsertPicsArray.join("")}`
        );

        btnLoadMoreWrapper.style.color = "#fff";
        btnAnimationWrapper.style.display = "none";
        countBtnPress++;
        document.querySelector(".active-works-tab").click();
      }, 5000);
    } else if (countBtnPress === 2) {
      const arrayOfWorksPics = [
        "wordpress5.jpg",
        "wordpress6.jpg",
        "wordpress7.jpg",
        "wordpress8.jpg",
        "web-design5.jpg",
        "web-design6.jpg",
        "web-design7.jpg",
        "web-design8.jpg",
        "landing-page5.jpg",
        "landing-page6.jpg",
        "landing-page7.jpg",
        "landing-page8.jpg",
        "graphic-design5.jpg",
        "graphic-design6.jpg",
        "graphic-design7.jpg",
        "graphic-design8.jpg",
      ];
      const companyBtnsContainer = document.querySelector(
        ".company-works-section .company-btns-container"
      );
      const btnLoadMoreWrapper = companyBtnsContainer.querySelector(
        ".btn-load-more-wrapper"
      );
      const btnAnimationWrapper = companyBtnsContainer.querySelector(
        ".btn-animation-wrapper"
      );
      let countWordpressPics = 5;
      let countWebDesignPics = 5;
      let countLandingPics = 5;
      let countGraphicDesignPics = 5;

      btnLoadMoreWrapper.style.color = "#18cfab";
      btnAnimationWrapper.style.display = "block";

      setTimeout(() => {
        arrayOfWorksPics.forEach((picture) => {
          if (picture.includes("wordpress")) {
            const newWordPressObj = `<li data-works="company_works_tab_4" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/wordpress/${picture}" alt="wordpress-pic-${countWordpressPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Wordpress</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countWordpressPics++;
            readyToInsertPicsArray2.push(newWordPressObj);
          } else if (picture.includes("landing")) {
            const newLandingPageObj = `<li data-works="company_works_tab_3" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/landing-page/${picture}" alt="landing-page-${countLandingPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Landing Pages</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countLandingPics++;
            readyToInsertPicsArray2.push(newLandingPageObj);
          } else if (picture.includes("graphic")) {
            const newGraphicDesignObj = `<li data-works="company_works_tab_1" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/graphic-design/${picture}" alt="graphic-design-${countGraphicDesignPics}"
                class="company-work-img" width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Graphic Design</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countGraphicDesignPics++;
            readyToInsertPicsArray2.push(newGraphicDesignObj);
          } else if (picture.includes("web")) {
            const newWebDesignObj = `<li data-works="company_works_tab_2" data-all-works="company_works_tab_all">
          <a href="">
            <div class="company-work-img-wrapper">
              <img src="pictures/web-design/${picture}" alt="web-design-${countWebDesignPics}" class="company-work-img"
                width="285" height="211">
              <div class="company-work-flag-wrapper flag-wrapper">
                <img src="pictures/icon-for-plag.png" alt="two-colorful-rounds" class="flag-wrapper-img" width="86"
                  height="43">
                <div class="titles-wrapper">
                  <h2 class="flag-wrapper-title accent-color">creative design</h2>
                  <h3 class="flag-wrapper-subtitle">Web Design</h3>
                </div>
              </div>
            </div>
          </a>
        </li>`;
            countWebDesignPics++;
            readyToInsertPicsArray2.push(newWebDesignObj);
          } else {
            console.log("there are no pics!");
          }
        });

        companyWorksTabsContent.insertAdjacentHTML(
          "beforeend",
          `${readyToInsertPicsArray2.join("")}`
        );

        document.querySelector(".active-works-tab").click();
        countBtnPress++;
        companyBtnsContainer.remove();
      }, 5000);
    }
  }

  // reviews section

  if (e.target.closest(".review-list-item")) {
    e.preventDefault();

    currentListItem = e.target.closest(".review-list-item");
    currentListItemId = currentListItem.id;
    currentContentItem = document.querySelector(
      `[data-rewiev-tab="${currentListItemId}"]`
    );

    reviewsContentItems.forEach((e) => {
      e.classList.remove("reviews-active-tab");
    });

    reviewListItems.forEach((e) => {
      e.classList.remove("margin-bottom");
    });

    currentContentItem.classList.add("reviews-active-tab");
    currentListItem.classList.add("margin-bottom");
  }

  currentIndexOfListItemInArray = reviewListItems.findIndex(
    (e) => e.id === currentListItemId
  );

  // switching carousel btns

  if (e.target.closest(".reviewer-switching-button-left")) {
    if (currentIndexOfListItemInArray > 0) {
      currentIndexOfListItemInArray--;

      reviewListItems[currentIndexOfListItemInArray].click();
    } else if (currentIndexOfListItemInArray === 0) {
      currentIndexOfListItemInArray = reviewListItems.length;
      currentIndexOfListItemInArray--;
      reviewListItems[currentIndexOfListItemInArray].click();
    }
  }

  if (e.target.closest(".reviewer-switching-button-right")) {
    if (currentIndexOfListItemInArray < reviewListItems.length) {
      currentIndexOfListItemInArray++;
      console.log(`${currentIndexOfListItemInArray} before else`);
      if (currentIndexOfListItemInArray < reviewListItems.length) {
        reviewListItems[currentIndexOfListItemInArray].click();
      }
      if (currentIndexOfListItemInArray === reviewListItems.length) {
        currentIndexOfListItemInArray = 0;
        reviewListItems[currentIndexOfListItemInArray].click();
        currentIndexOfListItemInArray++;
        console.log(`${currentIndexOfListItemInArray} from else`);
      }
    }
  }

  // EXTRA PICS SECTION => gallery-section

  const galleryListItem = document.querySelector(
    ".gallery-list-item:last-child"
  );
  if (e.target.closest(".btn-load-more.gallery")) {
    const companyBtnsContainer = document.querySelector(
      ".gallery-section .company-btns-container"
    );
    const btnLoadMoreWrapper = companyBtnsContainer.querySelector(
      ".btn-load-more-wrapper"
    );
    const btnAnimationWrapper = companyBtnsContainer.querySelector(
      ".btn-animation-wrapper"
    );
    let countWordpressPics = 5;
    let countWebDesignPics = 5;
    let countLandingPics = 5;
    let countGraphicDesignPics = 5;

    btnLoadMoreWrapper.style.color = "#18cfab";
    e.preventDefault();
    btnAnimationWrapper.style.display = "block";

    setTimeout(() => {
      const arrayOfGalleryPics = [
        "wordpress5.jpg",
        "wordpress6.jpg",
        "wordpress7.jpg",
        "wordpress8.jpg",
        "web-design5.jpg",
        "web-design6.jpg",
        "web-design7.jpg",
        "web-design8.jpg",
        "landing-page5.jpg",
        "landing-page6.jpg",
        "landing-page7.jpg",
        "landing-page8.jpg",
        "graphic-design5.jpg",
        "graphic-design6.jpg",
        "graphic-design7.jpg",
        "graphic-design8.jpg",
      ];

      arrayOfGalleryPics.forEach((picture) => {
        if (picture.includes("wordpress")) {
          const newWordPressObj = `
              <li class="gallery-list-item">
              <a href="#" class="gallery-list-item-link">
              <img src="pictures/wordpress/${picture}" alt="wordpress-pic-${countWordpressPics}" class="company-work-img"
                  width="378" height="263">
              </a>
            </li>
            `;
          countWordpressPics++;
          readyToInsertPicsGalleryArray.push(newWordPressObj);
        } else if (picture.includes("landing")) {
          const newLandingPageObj = `
          <li class="gallery-list-item">
          <a href="#" class="gallery-list-item-link">
          <img src="pictures/landing-page/${picture}" alt="wordpress-pic-${countLandingPics}" class="company-work-img"
              width="378" height="263">
          </a>
        </li>
        `;
          countLandingPics++;
          readyToInsertPicsGalleryArray.push(newLandingPageObj);
        } else if (picture.includes("graphic")) {
          const newGraphicDesignObj = `<li class="gallery-list-item">
          <a href="#" class="gallery-list-item-link">
          <img src="pictures/graphic-design/${picture}" alt="wordpress-pic-${countGraphicDesignPics}" class="company-work-img"
              width="378" height="263">
          </a>
        </li>`;
          countGraphicDesignPics++;
          readyToInsertPicsGalleryArray.push(newGraphicDesignObj);
        } else if (picture.includes("web")) {
          const newWebDesignObj = `<li class="gallery-list-item">
          <a href="#" class="gallery-list-item-link">
          <img src="pictures/web-design//${picture}" alt="wordpress-pic-${countWebDesignPics}" class="company-work-img"
              width="378" height="263">
          </a>
        </li>`;
          countWebDesignPics++;
          readyToInsertPicsGalleryArray.push(newWebDesignObj);
        } else {
          console.log("there are no these pics!");
        }
      });

      galleryListItem.insertAdjacentHTML(
        "afterend",
        `${readyToInsertPicsGalleryArray.join("")}`
      );

      new Masonry(galleryList, {
        itemSelector: ".gallery-list-item",
        gutter: 13,
        horizontalOrder: true,
      });

      companyBtnsContainer.remove();
    }, 5000);
  }
});

document.querySelector(".review-list-item").click(); // to choose first tab
document.querySelector(".company-works-tabs-title").click(); // to choose first tab

// masonry section

const galleryList = document.querySelector(".gallery-list");

new Masonry(galleryList, {
  itemSelector: ".gallery-list-item",
  gutter: 13,
  horizontalOrder: true,
});
