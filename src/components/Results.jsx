
import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Results({ input }) {
    const resultDATA = calculateInvestmentResults(input);
const initialInvestment=resultDATA[0].valueEndOfYear -resultDATA[0].interest - resultDATA[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest Year</th>
                <th>Total Interest </th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {resultDATA.map(yearData => {
                    const totalInterest=yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const totalAmountInvested=yearData.valueEndOfYear-totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest) } </td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>

    );

}