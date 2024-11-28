/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.profile-section {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.card-text {
    font-size: 14px;
    margin-bottom: 20px;
}

.btn-group a {
    padding: 10px 15px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border-radius: 4px;
    margin: 5px;
    display: inline-block;
    transition: background-color 0.3s;
}

.btn-group a:hover {
    background-color: #0056b3;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    overflow: auto;
}

.modal-content {
    background-color: white;
    margin: 10px;
    padding: 30px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.close {
    color: #aaa;
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
}

.close:hover {
    color: black;
}

form input[type="text"] {
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

form input[type="submit"] {
    padding: 10px;
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

form input[type="submit"]:hover {
    background-color: #0056b3;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .card {
        width: 100%;
        max-width: 350px;
    }

    .modal-content {
        width: 90%;
        max-width: 350px;
    }
}

/* Center the profile card */
.profile-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}