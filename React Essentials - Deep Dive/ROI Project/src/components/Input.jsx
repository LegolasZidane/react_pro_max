function Input({ input, onChange }){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        value={input.initialInvestment}
                        onChange={(event) => onChange("initialInvestment", event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        value={input.annualInvestment}
                        onChange={(event) => onChange("annualInvestment", event.target.value)}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        value={input.expectedReturn}
                        onChange={(event) => onChange("expectedReturn", event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        value={input.duration}
                        onChange={(event) => onChange("duration", event.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    );
}

export default Input