function Input({ input, onChange }){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input 
                        type="text" 
                        name="initialInvestment"
                        value={input.initialInvestment}
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input 
                        type="text" 
                        name="annualInvestment"
                        value={input.annualInvestment}
                        onChange={onChange}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input 
                        type="text"
                        name="expectedReturn" 
                        value={input.expectedReturn}
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input 
                        type="text" 
                        name="duration"
                        value={input.duration}
                        onChange={onChange}
                    />
                </p>
            </div>
        </section>
    );
}

export default Input