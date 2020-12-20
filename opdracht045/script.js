const useThisData = async function () {
    const data = await getData();
    console.log("here is the data to do something:", data);
};

useThisData();