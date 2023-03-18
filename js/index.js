
let itemNumber=document.getElementById('item-number');
let itemText=document.getElementById('item-text');
let index=0;
let items =document.querySelectorAll('.item');
let carusal =[{number:'01',text:'في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة'},
{number:'02',text:"في هذه المرحله يتم قبول المشاركين بناء علي الضوابط والشروط المذكوره"},
{number:'03',text:"في هذه المرحله يتم تقديم برامج تدريبيه وتأهيليه للمشاركين بموجز 7 حقائب تطويريه لتنميه المهارات المعرفيه لدي المشاركين"},
{number:'04',text:"في هذه المرحله يتم تقديم محتوي تدريبي الكتروني تفاعلي لكيفيه اعداد دراسه الجدوي للمشاركين"},
{number:'05',text:"في هذه المرحله يتم استقطاب متخصصين لمسانده المشاريع وتمكينها من تحقيق النمو والتوسع وزياده مبيعات المشاركين السنويه ومتابعتها"},
{number:'06',text:"في هذه المرحله يتم تقديم منتج تمويلي بالاضافه الي متابعه كافه الاعمال بحيث توجيههم بكيفيه الصرف"},
{number:'07',text:"في هذه المرحله يتم تمكين وتطوير مشاريع المشاركين من خلال مختصين  في تطوير الاعمال وتنميه المبيعات لدي المشاركين"},
{number:'08',text:"في هذه المرحله يتم دعم مشاريع المشاركين من خلال ربطهم بجهات تصدير وربطهم بمنافذ بيع  دوليه وتصدير مشاريعهم كقصص نجاح لبرنامج تجسير "},
]

function changeNow(){    
    index++
    items[0].style.backgroundColor='white'
    items[0].style.color='black'
    if(index>7){
        index=0
    }
    itemNumber.innerHTML=carusal[index].number
    itemText.innerHTML=carusal[index].text
   items[index].style.backgroundColor='#14B1C7'
   items[index].style.color='#ffffff'
   setTimeout(changeColors,2900)
    
}

function changeColors(){
    items[index].style.backgroundColor='white'
    items[index].style.color='black'
}
setInterval(changeNow,3000)

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',()=>{
        index=i
        itemNumber.innerHTML=carusal[index].number
        itemText.innerHTML=carusal[index].text
    })
    
}

$('.elservices').click(function(){
   $(this).css('width','50%');
   $(this).siblings().css('width','20%');
   $(this).find('.serv-layer').css('display','flex')
   $(this).siblings().find('.serv-layer').css('display','none')
   $(this).find('.layer-two').fadeOut(500)
   $(this).siblings().find('.layer-two').fadeIn(500)
})

