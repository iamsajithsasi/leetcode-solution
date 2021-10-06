```
Write an SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a PersonId is not present in the Address table, report null instead. 

Input: 

Person table:
+----------+----------+-----------+
| PersonId | LastName | FirstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address table:
+-----------+----------+---------------+------------+
| AddressId | PersonId | City          | State      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+

Output: 

+-----------+----------+---------------+----------+
| FirstName | LastName | City          | State    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+

Explanation:

There is no address in the address table for the PersonId = 1 so we return null in their city and state.
AddressId = 1 contains information about the address of PersonId = 2.
```

```
SELECT p.FirstName, p.LastName, a.City, a.State from Person p
    LEFT JOIN Address a
    USING(PersonId)
;
```