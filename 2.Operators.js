const sellingPrice= 200
const listingPrice=800
const discountedPercentage=((listingPrice-sellingPrice)/listingPrice*100)
 console.log ("This the Discounted Percentage is: "+ discountedPercentage +"%")

 const sellingPriceTwo= 199
const listingPriceTwo=799
const discountedPercentageTwo=((listingPriceTwo-sellingPriceTwo)/listingPriceTwo*100)
 console.log ("This the Discounted Percentage is: "+ discountedPercentageTwo +"%")
 //answer is "This the Discounted Percentage is: 75.09386733416771%"
 // now if we wanted to clean and net percentage for just simply do this 
 //syntax is nameanything(for example:"displaydiscountedprice/discount whichever i want to give")=Math.round(varriable name which i wanted to put in a appoarx or close to number)

 displaydiscountpercentage= Math.round(discountedPercentageTwo);
 console.log("Round dsiplay the Discounted price:"+displaydiscountpercentage +"% off")
