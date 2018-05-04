
-- Query For Tables That Have One Order Out But Others Pending
use orders_db;
SELECT a.filled_time, a.order_filled, b.filled_time, b.order_filled, a.id, a.menu_item, a.quantity, a.order_time, a.check_number, a.table_number
FROM orders a, orders b
WHERE a.id <> b.id
AND a.table_number = b.table_number
AND a.order_filled = false
AND b.order_filled = true;

-- To Format Dates
SELECT menu_item, DATE_FORMAT(orders.order_time, "%a %l:%i") AS order_time FROM orders;