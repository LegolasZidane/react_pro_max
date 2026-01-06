import { calculateInvestmentResults, formatter } from "../util/investment";

function Output({ input }){

    const annualData = calculateInvestmentResults(input);
    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;

    return(
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map(data => {

                        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                        const totalAmountInvested = data.valueEndOfYear - totalInterest;

                        return (<tr key={data.year} className="center">
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default Output