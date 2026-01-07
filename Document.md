# Data Binding
چرا؟
هدف Angular این است که: 1-  UI همیشه بازتاب state برنامه باشد (بدون اینکه دستی document.querySelector و innerHTML و… بنویسی)
                        2-  رویدادهای کاربر (کلیک، تایپ، …) راحت به کد TypeScript وصل شوند
                        3-  بین Component (مدل/State) و Template (View) یک ارتباط استاندارد و امن برقرار شود

*نتیجه : “اتصال داده و رویداد بین Component و DOM، به‌صورت declarative (اعلامی)”
## Interpolation `{{ }}`
نمایش مقدار یک متغیر یا expression از Component به‌صورت متن داخل Template.


