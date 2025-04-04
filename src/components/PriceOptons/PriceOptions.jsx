import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free drinking water",
            "Basic cardio machines",
            "Open gym access (6 AM - 10 PM)",
            "Monthly progress tracking"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "features": [
            "All Basic Plan features",
            "Access to group fitness classes",
            "Personalized workout plan",
            "Extended gym hours (5 AM - 11 PM)",
            "Yoga & stretching sessions",
            "Guest pass (1 per month)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "features": [
            "All Standard Plan features",
            "Sauna & steam room access",
            "One personal training session per month",
            "Access to strength training programs",
            "Advanced body composition analysis",
            "Towel service & premium locker"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 100,
          "features": [
            "All Premium Plan features",
            "Unlimited personal training",
            "Diet & nutrition consultation",
            "Priority booking for classes",
            "Access to exclusive gym areas",
            "Recovery massage (1 per month)",
            "Private locker with security code",
            "Hydrotherapy & ice bath access"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className="text-5xl">Best Prices</h2>
            {
                priceOptions.map(op=> <PriceOption key={op.id} option={op}></PriceOption> )
            }
        </div>
    );
};

export default PriceOptions;