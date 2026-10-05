import type React from "react";
import useFetchPost from "../hooks/useFetchPost";
import "./AddAlertPage.css"

const url = "http://localhost:3001/api/alerts";

export default function AddAlertPage() {
	const { execute, data, error, loading } = useFetchPost(url);

	const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const alertBody = {
            displayName: formData.get("displayName"),
            description: formData.get("description"),
            priority: formData.get("priority"),
            arena: formData.get("arena"),
            status: formData.get("status"),
            lon: Number(formData.get("lon")),
            lat: Number(formData.get("lat"))
        }
        
        await execute(alertBody)
    };

	return (
		<div className="addAlertCard">
			<h1>Add alert</h1>

			<form onSubmit={handleSubmit} className="addAlertForm">
				<input type="text" placeholder="displayName" name="displayName" required/>
				<input type="text" placeholder="description" name="description" required/>

				<label htmlFor="priority">Priority</label>
				<select name="priority" id="priority" required>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
					<option value="Critical">Critical</option>
				</select>

				<label htmlFor="arena">Arena</label>
				<select name="arena" id="arena" required>
					<option value="Center">Center</option>
					<option value="North">North</option>
					<option value="South">South</option>
				</select>

				<label htmlFor="status">Status</label>
				<select name="status" id="status" required>
					<option value="Active">Active</option>
					<option value="Handled">Handled</option>
				</select>

				<input type="text" placeholder="longitude" name="lon" required/>
				<input type="text" placeholder="latitude" name="lat" required/>
                {error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}

                <button type="submit" className="lastRow">{loading ? "Sending..." : "Send"}</button>
			</form>
            {data && <div>Successfull added!</div>}

		</div>
	);
}
