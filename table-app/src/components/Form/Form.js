import React from "react";

export default function Form({ handleChange, handleSubmit, inputs }) {
  return (
    <div>
      <form onSubmit={handleSubmit} action="/action_page.php">
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            id="firstName"
            value={inputs.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            id="lastName"
            value={inputs.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            id="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <select
            className="form-control"
            id="age"
            onChange={handleChange}
            value={inputs.age}
          >
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sel1" className="mr-3">
            Gender:
          </label>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                id="radio"
                type="radio"
                className="form-check-input"
                name="optradio"
                value="Male"
                onChange={handleChange}
              />
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                id="radio"
                type="radio"
                className="form-check-input"
                name="optradio"
                value="Female"
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="sel1" className="mr-3">
            Hobbies:
          </label>
          <div class="form-check-inline">
            <div>
              <label className="form-check-label mr-3">
                <input
                  id="checkbox1"
                  type="checkbox"
                  className="form-check-input"
                  defaultValue
                  onChange={handleChange}
                  value="Listen to music"
                />
                Listen to music
              </label>
              <div className="form-check-inline">
                <label className="form-check-label mr-3">
                  <input
                    id="checkbox2"
                    type="checkbox"
                    className="form-check-input"
                    defaultValue
                    onChange={handleChange}
                    value="Play game"
                  />
                  Play game
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label mr-3">
                  <input
                    id="checkbox3"
                    type="checkbox"
                    className="form-check-input"
                    defaultValue
                    onChange={handleChange}
                    value="Watch TV"
                  />
                  Watch TV
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
