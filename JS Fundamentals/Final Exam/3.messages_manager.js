function messages(input) {
    let messagesRecord = {};
    let maxMessages = Number(input.shift());
    let count = 0;

    for (const line of input) {
        if (line.includes('Add')) {
            let [comm,username,sent,received] = line.split('=');
            if (!messagesRecord.hasOwnProperty(username)) {
                count++;
                messagesRecord[username] = {};
                messagesRecord[username]['sent'] = Number(sent);
                messagesRecord[username]['received'] = Number(received);
                messagesRecord[username]['totalMessages'] = Number(sent) + Number(received)
            }
        } else if (line.includes('Message')){
            let [comm,sender,reciever] = line.split('=');
            if (messagesRecord.hasOwnProperty(sender) && messagesRecord.hasOwnProperty(reciever)) {
                if (messagesRecord[sender]['totalMessages'] < maxMessages) {
                    messagesRecord[sender]['sent'] += 1;
                    messagesRecord[sender]['totalMessages'] += 1;
                    if (messagesRecord[sender]['totalMessages'] === maxMessages) {
                        console.log(`${sender} reached the capacity!`);
                        delete messagesRecord[sender];
                        count--;
                    }
                } 
                if (messagesRecord[reciever]['totalMessages'] < maxMessages){
                messagesRecord[reciever]['received'] += 1;
                messagesRecord[reciever]['totalMessages'] += 1;
                if (messagesRecord[reciever]['totalMessages'] === maxMessages) {
                    console.log(`${reciever} reached the capacity!`);
                    delete messagesRecord[reciever];
                    count--;
                }
                }
            }
        } else if (line.includes('Empty')){
            let [comm,username] = line.split('=');
            delete messagesRecord[username];
            count--;
            if (username === 'All') {
                count = 0;
                messagesRecord = {};
            }
        } else if (line.includes('Statistics')){
            break;
        }
    }
    console.log(`Users count: ${count}`);
    for (const username in messagesRecord) {
        console.log(`${username} - ${messagesRecord[username]['totalMessages']}`);
        }
}
messages(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])