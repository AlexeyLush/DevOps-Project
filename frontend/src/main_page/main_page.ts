  interface Report {
    id: number;
    Endpoints: number;
    date: string;
    total_sum: number;
  }
  
  interface ApiResponse {
    status: number;
    reports: Report[];
  }
// import {} from 

localStorage.setItem("id", "1");
const user_id = localStorage.getItem("myCat");

const add_button = document.getElementById("add_button") as HTMLButtonElement;

let purchase_name_str: string =""
let purchase_date_str: string = "";
let purchase_cost_str:string='';
let purchase_comment_str:string='';

add_button.addEventListener("click", function() {
    

    let purchase_name = document.getElementById("purchase-name") as HTMLInputElement;
    let purchase_date = document.getElementById("purchase-date") as HTMLInputElement;
    let purchase_cost=document.getElementById("purchase-cost") as HTMLInputElement
    let purchase_comment=document.getElementById("purchase-comment") as HTMLInputElement

    purchase_name_str= purchase_name.value;
    purchase_date_str = purchase_date.value;
    purchase_cost_str=purchase_cost.value;
    let cost: number= parseInt(purchase_cost_str)
    purchase_comment_str=purchase_comment.value;
    

    const purchase_data={
        user_id: user_id,
        category_id: 1,
        amount: cost,
        date: purchase_date_str,
        description: purchase_name_str
    }



});

async function send_purchase(purchase_data: object): Promise<number> {
    try {
        const response = await fetch("http://0.0.0.0:3000/api/expenses", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchase_data),
        });

        const responseData: ApiResponse = await response.json();

        // Assuming there is at least one report in the array
        const firstReport: Report = responseData.reports[0];
        const totalSum: number = firstReport.total_sum;

        return totalSum;
    } catch (error) {
        console.error('Error:', (error as Error).message);
        return 0; // or some default value indicating an error
    }
}


const day_button=document.getElementById("day_button") as HTMLButtonElement
const per_day_result=document.getElementById("perDayResult") as HTMLDivElement

day_button.addEventListener('click', async function () {
    const total = {
        user_id: 1,
    };

    try {
        const totalSum = await send_purchase(total);
        per_day_result.textContent = String(totalSum);
    } catch (error) {
        console.error('Error in day_button click event:', (error as Error).message);
    }
});

async function get_total(total:object) {
    try{
        const response = await fetch("http://0.0.0.0:3000/reports/:1",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(total),
        })
    }
    catch (error){
        console.error('Error:', (error as Error).message);
        
    }
}

const week_button=document.getElementById("week_button") as HTMLButtonElement
const per_week_result=document.getElementById("perWeekResult") as HTMLDivElement

week_button.addEventListener('click',function(){
    per_week_result.textContent = "variable from importW"
})


const month_button=document.getElementById("month_button") as HTMLButtonElement
const per_month_result=document.getElementById("perMonthResult") as HTMLDivElement

month_button.addEventListener('click',function(){
    per_month_result.textContent = "variable from importM"
})


const year_button=document.getElementById("year_button") as HTMLButtonElement
const per_year_result=document.getElementById("perYearResult") as HTMLDivElement

year_button.addEventListener('click',function(){
    per_year_result.textContent = "variable from importY"
})

