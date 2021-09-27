/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let localNames = new Set()
    for (let i = 0; i < emails.length; i++) {
        var frontEnd
        var backEnd
        backEnd = emails[i].substr(emails[i].indexOf("@"), emails[i].length)
        if (emails[i].includes("+")) {
            frontEnd = emails[i].substr(0, emails[i].indexOf("+"))
        }
        else {
            frontEnd = emails[i].substr(0, emails[i].indexOf("@"))
        }
        while (frontEnd.includes(".")) {
            frontEnd = frontEnd.replace(".", '')
        }
        localNames.add(frontEnd + backEnd)      
    }
    console.log(localNames.size)
    return localNames.size
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com", "b@leetcode.com","c@leetcode.com"])