<?php


if ($_SERVER['REQUEST_METHOD'] === "POST") {

    $routes = ["/user"];

    verifyPostRoutes($routes);
} else {
    throw new Exception("Route not find");
}

function verifyPostRoutes($routes) {
    if(in_array($_SERVER['PATH_INFO'], $routes)) {
        controllerUser();
    } else {
        throw new Exception("Route not find");
    }
}

function controllerUser() {
    $entityBodyBeforeJsonDecode = file_get_contents('php://input');
    $entityBody = json_decode($entityBodyBeforeJsonDecode);


    if (!isset($entityBody->name)) {
        http_response_code(400);
        echo json_decode(
            [
                "message" => "the attribute name is not defined, please define the name"
            ]
            );

            return;
    }
    $sql = "INSERT INTO
                user
            (name, lastname, addres, birth_date) VALUES
            (:name, :lastname, :addres, :birth_date)";

    $pdo = new PDO('mysql:host=localhost;dbname=users', 'root', 'ANSKk08aPEDbFjDO');
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ":name" => $entityBody->name,
        ":lastname"=> $entityBody->lastname,
        ":addres"=> $entityBody->addres,
        ":birth_date"=> $entityBody->birth_date
    ]);

    $response = [
        "message" => "The inser was succesfull"
    ];

    $response = json_encode($response);

    header('Content-Type: application/json; charset=utf-8');
    http_response_code(2001);
    echo $response;
    
}

?>