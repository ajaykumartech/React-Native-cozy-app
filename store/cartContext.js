import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();


const initialProducts = [
  {
    "id": 1,
    "title": "Nike Sportswear Club Fleece",
    "image": "https://s3-alpha-sig.figma.com/img/000e/2fc4/657fc2ea217ab171b76d6b8b5e022f10?Expires=1693180800&Signature=SLZ9RSH0wBXz69XZp-ZJseq~jR~U7pZPOcpM1Af~ULkJFK6Me154OsWXJBTK7WDQE686y7OnDnpP2rjbmF2nIIihUzoiFT5vslynmfQx0be9FHLWjQZ5cTqqb50qEl4k0r5BeicjnZACkZIB9NxYXHz5Rrmkpoq3gcVhyNOAXrJvzRvmGmiBWA8WxxvOHb4qMVLymvu-CRHe4HQ0ZBsVLYviC05wkT40f5ZhIaegJNxYNsRhk9chhP0krVSpET3sPgmbHnVVCUb21vEfN6g4H3gOImA-jVFUSmIohi5hUyOFGJCtw-oYcpU3yMT5Xh1ivVCt8EbzGMyuXhsJ4qLdqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "originalPrice": 2599,
    "discountedPrice": 500,
    "discount": 23,
    "category": "Mens",
    "itemTitle": "Printed Pullover Hoodie",
    "description": "The Nike Throwback Pullover Hoodie is made from the premium French terry fabric that blends a performance",
    "images": [
      "https://s3-alpha-sig.figma.com/img/14fc/34c5/160fd8b896b28e35e63377d2dcd54de8?Expires=1693180800&Signature=e6f~tq6HA4qYl3WeH1f0kbid-fPUscOqt8GOYiYVyU7Qjc2ut0VjvKAnbujjQf8Pp2p-aM23TgmhazCh4Ngj3DoDkkh5N68qpV8dfaI-ZtfpxJzQqXQwT0s3uoawBhvDNCdX~S8hvLqGU7B4djvMdQbuo5HmTBpnU9Ano3vzIybqSAPqct8oqfAAI95WtYkDA7pS81aeTEsV~L2wDbinYkHnolvo3lGcGT-nULT2ooap5tgtU7gLHk4YkjNVzFSX1rAGG-yym3TakVp2HZffbtBUazUiYzraWw57zVnCR35bn8vIU9Nk4A7ysOk6JwDHc7UbufRok0hUMYihG6Fhvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f5e3/214d/6c373f5a49fdcdd8273c615ced64622b?Expires=1693180800&Signature=fZyM5iu3ZWJDpx14TRfWMly5i-pdAlme5u3vHZBjbYYB0A8VzCiaL04oqnRqFHIh5~Gq5EXleiWwZJpBkropuMVJP8pOinwiYl6W~KUcUa~nq2xeLHXvQ8L-ijmhKbfBtgAazwljFYddYLsqsxT4AkZjC~DnaAvWubVzf1Vm9kJiQFKHaG8JyC5clHtG74rbRhUru-G5thkiwtRlKIFQv0UtZ-lDa3nJY7YXy~ISw4einhGwG77y87t3LXQ68aJiQg7dZQXzJqYDTVKR4ZnI-YbR0JiC2kzO5nhZSDycO5RM5Q1ead1DK1MOmQTug~OPf~w-exrzVUul~YC4PMYfjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f40d/215d/e5d1aaa3c468ab6dac9b37350cc3086f?Expires=1693180800&Signature=EXo9BbKky~0BGaJ4GJTuv2jzp8stt3qattDRd9CjZHmmWbSHbYOQdQHN~etz5OMzlYU--ECa4JiQKPjMYUVQCctTZ9A0bkYgu6PIoSPP3nKQxqwdJVreNPljDFoRhRbT~BJXxrcNZ62w7tktqjd52rQ1k9GbIvD2F1tXTAQsNbXHkl4Ia1rxQUOxUrl7aqDBcGjWbR3QLQKrMLUKdahK9OtYVxjqaeg43J~cGyvKmrsOTkswena8jajao9L~bn1QPd9JiVl0pFEHEj9wWxy2YAXy48N4F2Abrk8Es94yYxiOECuAox0FmbzRzFtEQSGZRMW-DDqSCm4dBgm~~FU1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/14c3/44df/cad28850c20ab76887d86e9830dbd816?Expires=1693180800&Signature=BcD2yF~pGC~ja31L4BBewhxbBDHzlYTj7Jp0CdSyELgH-UOss13iAkhu0UjxnxgtBQ-VdX~OkZYYV85Hal6kehmziCbS2wcxjYlNfqU39Vsia0FtRBCM9qVzXd3dIVDeoqXv4Gy5KtgO1-ipbJZV7KqdxHOi6tH4gfVRAeGu6ZmEHvymAMFtrMneXfsHv8hRoQiJjPJV9mbx6mThirlGlcelbd90IMqsBOVgJe0FvsTX~wYiXv0r-HAQkVcwLK9fAS~vXZ-45Zejj9sZLLhNn-liHSldNJW~fatM~lA4ZCkr8F2jZWtrlbcKCt6KMLgrbd2ubzP2-rTRzFHVaCAChg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    ],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "colors": ["#94dbc5", "#6398E7", "#1a1919"],
    "reviewsCount" :245,
    "reviews": [
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/62a4/6822/d0da42de22f942958edfcf7444af29d7?Expires=1693180800&Signature=oAE-vxf9k7biDiKY7jWXFYosiV2ZKCTW1rNC5iAre5qdK3Q-8BTHeKi6PghyMjNx1tDqbZDx4HZFFev4IHkKRM8eqWGAut914mwE-9Yvzd-IGvBG5iLE-IluqLnBZa6Zy3PmiskG2CIDaO8-3GdQfmQmgXJHrJftC2WK3wYvr3gATKw5YHUca4ndRTBnjzRX1OHnw1jYanXk3jYWqsULTXSSd7P8im1YTG1ZaPaQKqvqAyHbjjdA9UlJvBG7ytL-KD0XHIvXNx2yQzhSi8foZfK60sU3iZj5bwX5jeq3kh0G17kGhdfBpEA48LsnIiaX1Cl-F8LKfk5JrIpgmo5bag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Jenny Wilson",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/1fa5/954d/e1e6ac60e326d4aaef5042cec5d59eba?Expires=1693180800&Signature=gVJqqOqlj71d8VwhErsmvJvcHg5xcKBjqAmVzDw4SuepHZotsMK0T23ucy0DMC47uqLsnPb5lTBuRTtt~8NtL5oTkYLbQkaq0gSVfBi7tUtFQf2ekliT65~~3Xmvx95S~Sp~MJefCCyh5ucVHhtLgI7Tmq8TDtYYxBADtsWnlZCRSY~T8DZ6DEg6JQgVNfuauVjmvDLW-aoBfKN6NB52k7VWawJMz9Qq5eGCh0S2eyBkpgnTizDmTDXdhn1goGQUYaXTzoUAd9cuMz~r6ZkDdtdD3rJgRkAIS7~6acPO0WNfcSE0HH92by3L3i2y1hep1UZxTHXThTq~RwqDq8ka~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Guy Hawkins",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/fa46/240f/c14ae2cb4cc4581eb8181b92f84884fe?Expires=1693180800&Signature=AMJm76lZC7n5xMB94sf1V8yUKiirtLI5swRNCk1iQkyQifQBlmFMqs-~e4y9S3lhX56L4gf3I6xT7vokIGhXDq3JTgUq2lEyIslwh0zP6zNyocm-u9kFptzSh8i0fCHt4e~SBz5P-6DQlk2zySrAL802N6TaMSbHirGQxkXivWbdMwSxyIVone4r4dyGHAsWpNi6WZPbj~YocU-FGEB958w-m3NGWKxEMzYbOd1La9gxWEwT4SzrytMGiytFkEJQCHahtNocJlugDyIWI2iWA1tgPDuo~-HXfAaAm0igojYPD16nHLxHiPlEmgPbnzZdyTiwXSdxd9Wj50oaHKTMUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Ronald Richards",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/000e/2fc4/657fc2ea217ab171b76d6b8b5e022f10?Expires=1693180800&Signature=SLZ9RSH0wBXz69XZp-ZJseq~jR~U7pZPOcpM1Af~ULkJFK6Me154OsWXJBTK7WDQE686y7OnDnpP2rjbmF2nIIihUzoiFT5vslynmfQx0be9FHLWjQZ5cTqqb50qEl4k0r5BeicjnZACkZIB9NxYXHz5Rrmkpoq3gcVhyNOAXrJvzRvmGmiBWA8WxxvOHb4qMVLymvu-CRHe4HQ0ZBsVLYviC05wkT40f5ZhIaegJNxYNsRhk9chhP0krVSpET3sPgmbHnVVCUb21vEfN6g4H3gOImA-jVFUSmIohi5hUyOFGJCtw-oYcpU3yMT5Xh1ivVCt8EbzGMyuXhsJ4qLdqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Savannah Nguyen",
        "stars": 4
      }
    ]
  },
  {
    "id": 2,
    "title": "Adidas Originals Graphic Tee",
    "image": "https://s3-alpha-sig.figma.com/img/a1e5/e04b/89f88fb39f14535358b4c5a458f63e84?Expires=1693180800&Signature=epSbHaZ2BRrRi5-Jsjd3K7-3Nqvjt1VcrZgHiNhFC4KL7SMnWg5QHvB6BQhpedYm1j9bEkoPjJkh2mmPawtpQRu-CU~hDeCokoR1ejJx~U5GycCoQmukypVeJLM5ecG10azUhB7WAZgxihle7SkIz1srtaO3v1~zsO8nw0kjUc-ssyxRvsAgAzfe~PcLdFNJ4wMWox2whackqsmSDIWevBd5WOybTpcKvVMOVZuKL0J-z0TrEud-gdKbXsw2MDDiUeug3RtxMfXjkS9MjTA5iPNJr2tBtelwVvzycwuZmiSw0BBPeoMN91hpSx8QeFD6UVWZo0C0FK8zd2ABE9Z-fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "originalPrice": 1499,
    "discountedPrice": 1199,
    "discount": 20,
    "category": "Mens",
    "description": "The Adidas Graphic Tee is made from the premium French terry fabric that blends a performance",
    "images": [
      "https://s3-alpha-sig.figma.com/img/14fc/34c5/160fd8b896b28e35e63377d2dcd54de8?Expires=1693180800&Signature=e6f~tq6HA4qYl3WeH1f0kbid-fPUscOqt8GOYiYVyU7Qjc2ut0VjvKAnbujjQf8Pp2p-aM23TgmhazCh4Ngj3DoDkkh5N68qpV8dfaI-ZtfpxJzQqXQwT0s3uoawBhvDNCdX~S8hvLqGU7B4djvMdQbuo5HmTBpnU9Ano3vzIybqSAPqct8oqfAAI95WtYkDA7pS81aeTEsV~L2wDbinYkHnolvo3lGcGT-nULT2ooap5tgtU7gLHk4YkjNVzFSX1rAGG-yym3TakVp2HZffbtBUazUiYzraWw57zVnCR35bn8vIU9Nk4A7ysOk6JwDHc7UbufRok0hUMYihG6Fhvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f5e3/214d/6c373f5a49fdcdd8273c615ced64622b?Expires=1693180800&Signature=fZyM5iu3ZWJDpx14TRfWMly5i-pdAlme5u3vHZBjbYYB0A8VzCiaL04oqnRqFHIh5~Gq5EXleiWwZJpBkropuMVJP8pOinwiYl6W~KUcUa~nq2xeLHXvQ8L-ijmhKbfBtgAazwljFYddYLsqsxT4AkZjC~DnaAvWubVzf1Vm9kJiQFKHaG8JyC5clHtG74rbRhUru-G5thkiwtRlKIFQv0UtZ-lDa3nJY7YXy~ISw4einhGwG77y87t3LXQ68aJiQg7dZQXzJqYDTVKR4ZnI-YbR0JiC2kzO5nhZSDycO5RM5Q1ead1DK1MOmQTug~OPf~w-exrzVUul~YC4PMYfjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f40d/215d/e5d1aaa3c468ab6dac9b37350cc3086f?Expires=1693180800&Signature=EXo9BbKky~0BGaJ4GJTuv2jzp8stt3qattDRd9CjZHmmWbSHbYOQdQHN~etz5OMzlYU--ECa4JiQKPjMYUVQCctTZ9A0bkYgu6PIoSPP3nKQxqwdJVreNPljDFoRhRbT~BJXxrcNZ62w7tktqjd52rQ1k9GbIvD2F1tXTAQsNbXHkl4Ia1rxQUOxUrl7aqDBcGjWbR3QLQKrMLUKdahK9OtYVxjqaeg43J~cGyvKmrsOTkswena8jajao9L~bn1QPd9JiVl0pFEHEj9wWxy2YAXy48N4F2Abrk8Es94yYxiOECuAox0FmbzRzFtEQSGZRMW-DDqSCm4dBgm~~FU1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/14c3/44df/cad28850c20ab76887d86e9830dbd816?Expires=1693180800&Signature=BcD2yF~pGC~ja31L4BBewhxbBDHzlYTj7Jp0CdSyELgH-UOss13iAkhu0UjxnxgtBQ-VdX~OkZYYV85Hal6kehmziCbS2wcxjYlNfqU39Vsia0FtRBCM9qVzXd3dIVDeoqXv4Gy5KtgO1-ipbJZV7KqdxHOi6tH4gfVRAeGu6ZmEHvymAMFtrMneXfsHv8hRoQiJjPJV9mbx6mThirlGlcelbd90IMqsBOVgJe0FvsTX~wYiXv0r-HAQkVcwLK9fAS~vXZ-45Zejj9sZLLhNn-liHSldNJW~fatM~lA4ZCkr8F2jZWtrlbcKCt6KMLgrbd2ubzP2-rTRzFHVaCAChg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    ],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "colors": ["#94dbc5", "#6398E7", "#1a1919"],
    "reviewsCount" :245,
    "reviews": [
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/62a4/6822/d0da42de22f942958edfcf7444af29d7?Expires=1693180800&Signature=oAE-vxf9k7biDiKY7jWXFYosiV2ZKCTW1rNC5iAre5qdK3Q-8BTHeKi6PghyMjNx1tDqbZDx4HZFFev4IHkKRM8eqWGAut914mwE-9Yvzd-IGvBG5iLE-IluqLnBZa6Zy3PmiskG2CIDaO8-3GdQfmQmgXJHrJftC2WK3wYvr3gATKw5YHUca4ndRTBnjzRX1OHnw1jYanXk3jYWqsULTXSSd7P8im1YTG1ZaPaQKqvqAyHbjjdA9UlJvBG7ytL-KD0XHIvXNx2yQzhSi8foZfK60sU3iZj5bwX5jeq3kh0G17kGhdfBpEA48LsnIiaX1Cl-F8LKfk5JrIpgmo5bag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Jenny Wilson",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/1fa5/954d/e1e6ac60e326d4aaef5042cec5d59eba?Expires=1693180800&Signature=gVJqqOqlj71d8VwhErsmvJvcHg5xcKBjqAmVzDw4SuepHZotsMK0T23ucy0DMC47uqLsnPb5lTBuRTtt~8NtL5oTkYLbQkaq0gSVfBi7tUtFQf2ekliT65~~3Xmvx95S~Sp~MJefCCyh5ucVHhtLgI7Tmq8TDtYYxBADtsWnlZCRSY~T8DZ6DEg6JQgVNfuauVjmvDLW-aoBfKN6NB52k7VWawJMz9Qq5eGCh0S2eyBkpgnTizDmTDXdhn1goGQUYaXTzoUAd9cuMz~r6ZkDdtdD3rJgRkAIS7~6acPO0WNfcSE0HH92by3L3i2y1hep1UZxTHXThTq~RwqDq8ka~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Guy Hawkins",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/fa46/240f/c14ae2cb4cc4581eb8181b92f84884fe?Expires=1693180800&Signature=AMJm76lZC7n5xMB94sf1V8yUKiirtLI5swRNCk1iQkyQifQBlmFMqs-~e4y9S3lhX56L4gf3I6xT7vokIGhXDq3JTgUq2lEyIslwh0zP6zNyocm-u9kFptzSh8i0fCHt4e~SBz5P-6DQlk2zySrAL802N6TaMSbHirGQxkXivWbdMwSxyIVone4r4dyGHAsWpNi6WZPbj~YocU-FGEB958w-m3NGWKxEMzYbOd1La9gxWEwT4SzrytMGiytFkEJQCHahtNocJlugDyIWI2iWA1tgPDuo~-HXfAaAm0igojYPD16nHLxHiPlEmgPbnzZdyTiwXSdxd9Wj50oaHKTMUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Ronald Richards",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/000e/2fc4/657fc2ea217ab171b76d6b8b5e022f10?Expires=1693180800&Signature=SLZ9RSH0wBXz69XZp-ZJseq~jR~U7pZPOcpM1Af~ULkJFK6Me154OsWXJBTK7WDQE686y7OnDnpP2rjbmF2nIIihUzoiFT5vslynmfQx0be9FHLWjQZ5cTqqb50qEl4k0r5BeicjnZACkZIB9NxYXHz5Rrmkpoq3gcVhyNOAXrJvzRvmGmiBWA8WxxvOHb4qMVLymvu-CRHe4HQ0ZBsVLYviC05wkT40f5ZhIaegJNxYNsRhk9chhP0krVSpET3sPgmbHnVVCUb21vEfN6g4H3gOImA-jVFUSmIohi5hUyOFGJCtw-oYcpU3yMT5Xh1ivVCt8EbzGMyuXhsJ4qLdqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Savannah Nguyen",
        "stars": 4
      }
    ]
  },
  {
    "id": 3,
    "title": "Puma Cali Sneakers",
    "image": "https://s3-alpha-sig.figma.com/img/62a4/6822/d0da42de22f942958edfcf7444af29d7?Expires=1693180800&Signature=oAE-vxf9k7biDiKY7jWXFYosiV2ZKCTW1rNC5iAre5qdK3Q-8BTHeKi6PghyMjNx1tDqbZDx4HZFFev4IHkKRM8eqWGAut914mwE-9Yvzd-IGvBG5iLE-IluqLnBZa6Zy3PmiskG2CIDaO8-3GdQfmQmgXJHrJftC2WK3wYvr3gATKw5YHUca4ndRTBnjzRX1OHnw1jYanXk3jYWqsULTXSSd7P8im1YTG1ZaPaQKqvqAyHbjjdA9UlJvBG7ytL-KD0XHIvXNx2yQzhSi8foZfK60sU3iZj5bwX5jeq3kh0G17kGhdfBpEA48LsnIiaX1Cl-F8LKfk5JrIpgmo5bag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "originalPrice": 3999,
    "discountedPrice": 2999,
    "discount": 25,
    "category": "Mens",
    "description": "The Puma sneaker hoodies is made from the premium French terry fabric that blends a performance",
    "images": [
      "https://s3-alpha-sig.figma.com/img/14fc/34c5/160fd8b896b28e35e63377d2dcd54de8?Expires=1693180800&Signature=e6f~tq6HA4qYl3WeH1f0kbid-fPUscOqt8GOYiYVyU7Qjc2ut0VjvKAnbujjQf8Pp2p-aM23TgmhazCh4Ngj3DoDkkh5N68qpV8dfaI-ZtfpxJzQqXQwT0s3uoawBhvDNCdX~S8hvLqGU7B4djvMdQbuo5HmTBpnU9Ano3vzIybqSAPqct8oqfAAI95WtYkDA7pS81aeTEsV~L2wDbinYkHnolvo3lGcGT-nULT2ooap5tgtU7gLHk4YkjNVzFSX1rAGG-yym3TakVp2HZffbtBUazUiYzraWw57zVnCR35bn8vIU9Nk4A7ysOk6JwDHc7UbufRok0hUMYihG6Fhvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f5e3/214d/6c373f5a49fdcdd8273c615ced64622b?Expires=1693180800&Signature=fZyM5iu3ZWJDpx14TRfWMly5i-pdAlme5u3vHZBjbYYB0A8VzCiaL04oqnRqFHIh5~Gq5EXleiWwZJpBkropuMVJP8pOinwiYl6W~KUcUa~nq2xeLHXvQ8L-ijmhKbfBtgAazwljFYddYLsqsxT4AkZjC~DnaAvWubVzf1Vm9kJiQFKHaG8JyC5clHtG74rbRhUru-G5thkiwtRlKIFQv0UtZ-lDa3nJY7YXy~ISw4einhGwG77y87t3LXQ68aJiQg7dZQXzJqYDTVKR4ZnI-YbR0JiC2kzO5nhZSDycO5RM5Q1ead1DK1MOmQTug~OPf~w-exrzVUul~YC4PMYfjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f40d/215d/e5d1aaa3c468ab6dac9b37350cc3086f?Expires=1693180800&Signature=EXo9BbKky~0BGaJ4GJTuv2jzp8stt3qattDRd9CjZHmmWbSHbYOQdQHN~etz5OMzlYU--ECa4JiQKPjMYUVQCctTZ9A0bkYgu6PIoSPP3nKQxqwdJVreNPljDFoRhRbT~BJXxrcNZ62w7tktqjd52rQ1k9GbIvD2F1tXTAQsNbXHkl4Ia1rxQUOxUrl7aqDBcGjWbR3QLQKrMLUKdahK9OtYVxjqaeg43J~cGyvKmrsOTkswena8jajao9L~bn1QPd9JiVl0pFEHEj9wWxy2YAXy48N4F2Abrk8Es94yYxiOECuAox0FmbzRzFtEQSGZRMW-DDqSCm4dBgm~~FU1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/14c3/44df/cad28850c20ab76887d86e9830dbd816?Expires=1693180800&Signature=BcD2yF~pGC~ja31L4BBewhxbBDHzlYTj7Jp0CdSyELgH-UOss13iAkhu0UjxnxgtBQ-VdX~OkZYYV85Hal6kehmziCbS2wcxjYlNfqU39Vsia0FtRBCM9qVzXd3dIVDeoqXv4Gy5KtgO1-ipbJZV7KqdxHOi6tH4gfVRAeGu6ZmEHvymAMFtrMneXfsHv8hRoQiJjPJV9mbx6mThirlGlcelbd90IMqsBOVgJe0FvsTX~wYiXv0r-HAQkVcwLK9fAS~vXZ-45Zejj9sZLLhNn-liHSldNJW~fatM~lA4ZCkr8F2jZWtrlbcKCt6KMLgrbd2ubzP2-rTRzFHVaCAChg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    ],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "colors": ["#94dbc5", "#6398E7", "#1a1919"],
    "reviewsCount" :245,
    "reviews": [
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/62a4/6822/d0da42de22f942958edfcf7444af29d7?Expires=1693180800&Signature=oAE-vxf9k7biDiKY7jWXFYosiV2ZKCTW1rNC5iAre5qdK3Q-8BTHeKi6PghyMjNx1tDqbZDx4HZFFev4IHkKRM8eqWGAut914mwE-9Yvzd-IGvBG5iLE-IluqLnBZa6Zy3PmiskG2CIDaO8-3GdQfmQmgXJHrJftC2WK3wYvr3gATKw5YHUca4ndRTBnjzRX1OHnw1jYanXk3jYWqsULTXSSd7P8im1YTG1ZaPaQKqvqAyHbjjdA9UlJvBG7ytL-KD0XHIvXNx2yQzhSi8foZfK60sU3iZj5bwX5jeq3kh0G17kGhdfBpEA48LsnIiaX1Cl-F8LKfk5JrIpgmo5bag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Jenny Wilson",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/1fa5/954d/e1e6ac60e326d4aaef5042cec5d59eba?Expires=1693180800&Signature=gVJqqOqlj71d8VwhErsmvJvcHg5xcKBjqAmVzDw4SuepHZotsMK0T23ucy0DMC47uqLsnPb5lTBuRTtt~8NtL5oTkYLbQkaq0gSVfBi7tUtFQf2ekliT65~~3Xmvx95S~Sp~MJefCCyh5ucVHhtLgI7Tmq8TDtYYxBADtsWnlZCRSY~T8DZ6DEg6JQgVNfuauVjmvDLW-aoBfKN6NB52k7VWawJMz9Qq5eGCh0S2eyBkpgnTizDmTDXdhn1goGQUYaXTzoUAd9cuMz~r6ZkDdtdD3rJgRkAIS7~6acPO0WNfcSE0HH92by3L3i2y1hep1UZxTHXThTq~RwqDq8ka~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Guy Hawkins",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/fa46/240f/c14ae2cb4cc4581eb8181b92f84884fe?Expires=1693180800&Signature=AMJm76lZC7n5xMB94sf1V8yUKiirtLI5swRNCk1iQkyQifQBlmFMqs-~e4y9S3lhX56L4gf3I6xT7vokIGhXDq3JTgUq2lEyIslwh0zP6zNyocm-u9kFptzSh8i0fCHt4e~SBz5P-6DQlk2zySrAL802N6TaMSbHirGQxkXivWbdMwSxyIVone4r4dyGHAsWpNi6WZPbj~YocU-FGEB958w-m3NGWKxEMzYbOd1La9gxWEwT4SzrytMGiytFkEJQCHahtNocJlugDyIWI2iWA1tgPDuo~-HXfAaAm0igojYPD16nHLxHiPlEmgPbnzZdyTiwXSdxd9Wj50oaHKTMUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Ronald Richards",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/000e/2fc4/657fc2ea217ab171b76d6b8b5e022f10?Expires=1693180800&Signature=SLZ9RSH0wBXz69XZp-ZJseq~jR~U7pZPOcpM1Af~ULkJFK6Me154OsWXJBTK7WDQE686y7OnDnpP2rjbmF2nIIihUzoiFT5vslynmfQx0be9FHLWjQZ5cTqqb50qEl4k0r5BeicjnZACkZIB9NxYXHz5Rrmkpoq3gcVhyNOAXrJvzRvmGmiBWA8WxxvOHb4qMVLymvu-CRHe4HQ0ZBsVLYviC05wkT40f5ZhIaegJNxYNsRhk9chhP0krVSpET3sPgmbHnVVCUb21vEfN6g4H3gOImA-jVFUSmIohi5hUyOFGJCtw-oYcpU3yMT5Xh1ivVCt8EbzGMyuXhsJ4qLdqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Savannah Nguyen",
        "stars": 4
      }
    ]
  },
  {
    "id": 4,
    "title": "Under Armour HeatGear Leggings",
    "image": "https://s3-alpha-sig.figma.com/img/df7d/c6e7/bcc4932c0fc7c290b766ecfd8e7396a5?Expires=1693180800&Signature=PIJbKJ8wtWdYeSIOdD2HRuHBMPAI0UWPy9aEZ-zfgaiJ7NNZQvxGKkelJGSAZJDSNIZfUQsgZ6K5SuIfK2fknIzEO0shZlFBGoXG7YQr6JbELGcrdxbeCBsOpcGUu3np9uxk3FWQWgUUvhkjrJNsH~I~9EhrFgLZwHrHZWfIHh18uSp2xj7yeWyhFPnWrGocYLl8mXCR2AfnUlI2wlqb1jjR729oAIJe9SGh4QIaNCBWoUHoRvzKTCh3WMEE9ltZPFH4aL-N6EdKbXxev16dCho-R94eDjxJj0mubomExLqonHDnVhV~fOpHN80R3dgALrRO5s6y7DnugADU3FS~eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "originalPrice": 1899,
    "discountedPrice": 99,
    "discount": 16,
    "category": "Mens",
    "description": "The Puma Under Armour HeatGear Leggings is made from the premium French terry fabric that blends a performance",
    "images": [
      "https://s3-alpha-sig.figma.com/img/14fc/34c5/160fd8b896b28e35e63377d2dcd54de8?Expires=1693180800&Signature=e6f~tq6HA4qYl3WeH1f0kbid-fPUscOqt8GOYiYVyU7Qjc2ut0VjvKAnbujjQf8Pp2p-aM23TgmhazCh4Ngj3DoDkkh5N68qpV8dfaI-ZtfpxJzQqXQwT0s3uoawBhvDNCdX~S8hvLqGU7B4djvMdQbuo5HmTBpnU9Ano3vzIybqSAPqct8oqfAAI95WtYkDA7pS81aeTEsV~L2wDbinYkHnolvo3lGcGT-nULT2ooap5tgtU7gLHk4YkjNVzFSX1rAGG-yym3TakVp2HZffbtBUazUiYzraWw57zVnCR35bn8vIU9Nk4A7ysOk6JwDHc7UbufRok0hUMYihG6Fhvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f5e3/214d/6c373f5a49fdcdd8273c615ced64622b?Expires=1693180800&Signature=fZyM5iu3ZWJDpx14TRfWMly5i-pdAlme5u3vHZBjbYYB0A8VzCiaL04oqnRqFHIh5~Gq5EXleiWwZJpBkropuMVJP8pOinwiYl6W~KUcUa~nq2xeLHXvQ8L-ijmhKbfBtgAazwljFYddYLsqsxT4AkZjC~DnaAvWubVzf1Vm9kJiQFKHaG8JyC5clHtG74rbRhUru-G5thkiwtRlKIFQv0UtZ-lDa3nJY7YXy~ISw4einhGwG77y87t3LXQ68aJiQg7dZQXzJqYDTVKR4ZnI-YbR0JiC2kzO5nhZSDycO5RM5Q1ead1DK1MOmQTug~OPf~w-exrzVUul~YC4PMYfjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f40d/215d/e5d1aaa3c468ab6dac9b37350cc3086f?Expires=1693180800&Signature=EXo9BbKky~0BGaJ4GJTuv2jzp8stt3qattDRd9CjZHmmWbSHbYOQdQHN~etz5OMzlYU--ECa4JiQKPjMYUVQCctTZ9A0bkYgu6PIoSPP3nKQxqwdJVreNPljDFoRhRbT~BJXxrcNZ62w7tktqjd52rQ1k9GbIvD2F1tXTAQsNbXHkl4Ia1rxQUOxUrl7aqDBcGjWbR3QLQKrMLUKdahK9OtYVxjqaeg43J~cGyvKmrsOTkswena8jajao9L~bn1QPd9JiVl0pFEHEj9wWxy2YAXy48N4F2Abrk8Es94yYxiOECuAox0FmbzRzFtEQSGZRMW-DDqSCm4dBgm~~FU1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/14c3/44df/cad28850c20ab76887d86e9830dbd816?Expires=1693180800&Signature=BcD2yF~pGC~ja31L4BBewhxbBDHzlYTj7Jp0CdSyELgH-UOss13iAkhu0UjxnxgtBQ-VdX~OkZYYV85Hal6kehmziCbS2wcxjYlNfqU39Vsia0FtRBCM9qVzXd3dIVDeoqXv4Gy5KtgO1-ipbJZV7KqdxHOi6tH4gfVRAeGu6ZmEHvymAMFtrMneXfsHv8hRoQiJjPJV9mbx6mThirlGlcelbd90IMqsBOVgJe0FvsTX~wYiXv0r-HAQkVcwLK9fAS~vXZ-45Zejj9sZLLhNn-liHSldNJW~fatM~lA4ZCkr8F2jZWtrlbcKCt6KMLgrbd2ubzP2-rTRzFHVaCAChg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    ],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "colors": ["#94dbc5", "#6398E7", "#1a1919"],
    "reviewsCount" :245,
    "reviews": [
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/62a4/6822/d0da42de22f942958edfcf7444af29d7?Expires=1693180800&Signature=oAE-vxf9k7biDiKY7jWXFYosiV2ZKCTW1rNC5iAre5qdK3Q-8BTHeKi6PghyMjNx1tDqbZDx4HZFFev4IHkKRM8eqWGAut914mwE-9Yvzd-IGvBG5iLE-IluqLnBZa6Zy3PmiskG2CIDaO8-3GdQfmQmgXJHrJftC2WK3wYvr3gATKw5YHUca4ndRTBnjzRX1OHnw1jYanXk3jYWqsULTXSSd7P8im1YTG1ZaPaQKqvqAyHbjjdA9UlJvBG7ytL-KD0XHIvXNx2yQzhSi8foZfK60sU3iZj5bwX5jeq3kh0G17kGhdfBpEA48LsnIiaX1Cl-F8LKfk5JrIpgmo5bag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Jenny Wilson",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/1fa5/954d/e1e6ac60e326d4aaef5042cec5d59eba?Expires=1693180800&Signature=gVJqqOqlj71d8VwhErsmvJvcHg5xcKBjqAmVzDw4SuepHZotsMK0T23ucy0DMC47uqLsnPb5lTBuRTtt~8NtL5oTkYLbQkaq0gSVfBi7tUtFQf2ekliT65~~3Xmvx95S~Sp~MJefCCyh5ucVHhtLgI7Tmq8TDtYYxBADtsWnlZCRSY~T8DZ6DEg6JQgVNfuauVjmvDLW-aoBfKN6NB52k7VWawJMz9Qq5eGCh0S2eyBkpgnTizDmTDXdhn1goGQUYaXTzoUAd9cuMz~r6ZkDdtdD3rJgRkAIS7~6acPO0WNfcSE0HH92by3L3i2y1hep1UZxTHXThTq~RwqDq8ka~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Guy Hawkins",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/fa46/240f/c14ae2cb4cc4581eb8181b92f84884fe?Expires=1693180800&Signature=AMJm76lZC7n5xMB94sf1V8yUKiirtLI5swRNCk1iQkyQifQBlmFMqs-~e4y9S3lhX56L4gf3I6xT7vokIGhXDq3JTgUq2lEyIslwh0zP6zNyocm-u9kFptzSh8i0fCHt4e~SBz5P-6DQlk2zySrAL802N6TaMSbHirGQxkXivWbdMwSxyIVone4r4dyGHAsWpNi6WZPbj~YocU-FGEB958w-m3NGWKxEMzYbOd1La9gxWEwT4SzrytMGiytFkEJQCHahtNocJlugDyIWI2iWA1tgPDuo~-HXfAaAm0igojYPD16nHLxHiPlEmgPbnzZdyTiwXSdxd9Wj50oaHKTMUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Ronald Richards",
        "stars": 4
      },
      {
        "rating": "4.8",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...",
        "reviewerImage": "https://s3-alpha-sig.figma.com/img/000e/2fc4/657fc2ea217ab171b76d6b8b5e022f10?Expires=1693180800&Signature=SLZ9RSH0wBXz69XZp-ZJseq~jR~U7pZPOcpM1Af~ULkJFK6Me154OsWXJBTK7WDQE686y7OnDnpP2rjbmF2nIIihUzoiFT5vslynmfQx0be9FHLWjQZ5cTqqb50qEl4k0r5BeicjnZACkZIB9NxYXHz5Rrmkpoq3gcVhyNOAXrJvzRvmGmiBWA8WxxvOHb4qMVLymvu-CRHe4HQ0ZBsVLYviC05wkT40f5ZhIaegJNxYNsRhk9chhP0krVSpET3sPgmbHnVVCUb21vEfN6g4H3gOImA-jVFUSmIohi5hUyOFGJCtw-oYcpU3yMT5Xh1ivVCt8EbzGMyuXhsJ4qLdqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "name": "Savannah Nguyen",
        "stars": 4
      }
    ]
  }
  // Add more dummy products...
];


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, initialProducts);
  
    const addItemToCart = (item) => {
      dispatch({ type: 'ADD_ITEM', item });
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addItemToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    return useContext(CartContext);
  };
 