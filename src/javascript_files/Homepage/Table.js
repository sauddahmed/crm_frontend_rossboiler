import React from "react";
import "../../css_files/Homepage/Table.css";

function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Category Id</th>
          <th>Category Name</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Electronics</td>
          <td>Devices and gadgets like phones, laptops, and TVs</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Home Appliances</td>
          <td>Essential appliances like refrigerators and washing machines</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Furniture</td>
          <td>Tables, chairs, sofas, and other furniture items</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Clothing</td>
          <td>Men's, women's, and kids' apparel</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Books</td>
          <td>Educational, fictional, and non-fictional books</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Sports</td>
          <td>Sports equipment, apparel, and accessories</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Beauty</td>
          <td>Skincare, haircare, and makeup products</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Automotive</td>
          <td>Car and bike accessories and tools</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Health</td>
          <td>Health supplements and fitness equipment</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Groceries</td>
          <td>Everyday essentials like food and beverages</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Garden</td>
          <td>Gardening tools, plants, and accessories</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        {/* <tr>
          <td>12</td>
          <td>Office Supplies</td>
          <td>Stationery, organizers, and office equipment</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
         <tr>
          <td>13</td>
          <td>Pet Supplies</td>
          <td>Food, toys, and care items for pets</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>Toys</td>
          <td>Play items for kids and adults</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>Travel</td>
          <td>Luggage, travel gear, and accessories</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>Music</td>
          <td>Musical instruments and accessories</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>17</td>
          <td>Art Supplies</td>
          <td>Items for painting, drawing, and crafting</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>Jewelry</td>
          <td>Necklaces, rings, and other ornaments</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>19</td>
          <td>Footwear</td>
          <td>Shoes, sandals, and boots</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>
        <tr>
          <td>20</td>
          <td>Kitchenware</td>
          <td>Utensils, cookware, and dining essentials</td>
          <td>
            <i class="fa-regular fa-pen-to-square" title="Edit"></i>
          </td>
          <td>
            <i class="fa-solid fa-trash" title="Delete"></i>
          </td>
        </tr>*/}
      </tbody>
    </table>
  );
}

export default Table;
