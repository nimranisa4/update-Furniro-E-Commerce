"use client";
import Frame from "@/components/Frame";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import Link from "next/link";
import Button from "@/components/Button";
import "animate.css";
import { UserDetails } from "@/types/ComponentsTypes";


const CheckoutPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    additionalInfo: "",
  });

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<string[]>([]);

  const [formError, setFormError] = useState<string | null>(null);
  const { cartItems, clearCart } = useCart();

  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState<string>("");
  const [paymentProcessing, setPaymentProcessing] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  // Handle input change for user details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };


  // Validate form data
  const validateForm = () => {
    if (!userDetails.firstName.trim()) return "First Name is required.";
    if (!userDetails.lastName.trim()) return "Last Name is required.";
    if (!userDetails.email.trim()) return "Email Address is required.";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userDetails.email))
      return "Please enter a valid Email Address.";
    if (!userDetails.address.trim()) return "Street Address is required.";
    if (!selectedCountry.trim()) return "Please select a Country.";
    if (!selectedProvince.trim()) return "Please select a Province.";
    if (!userDetails.zipCode.trim()) return "ZIP Code is required.";
    if (!/^\d+$/.test(userDetails.zipCode)) return "ZIP Code must contain only numbers.";
    if (!userDetails.phone.trim()) return "Phone Number is required.";
    if (!/^\d+$/.test(userDetails.phone)) return "Phone Number must contain only numbers.";
    return null;
  };

  // Handle Place Order click
  const handlePlaceOrder = () => {
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    setFormError(null); // Reset any form error
    setShowPaymentModal(true); // Show payment method selection
  };


  // Payment Processing Handler
  const handlePaymentProcessing = () => {
    // Validate if payment method is selected
    if (!paymentMethod) {
      setPaymentMessage("Please select a payment method.");
      return;
    }

    // Validate card details if card is selected
    if (
      paymentMethod === "card" &&
      (!cardNumber || !expiryDate || !cvv)
    ) {
      setPaymentMessage("Please fill out all card details.");
      return;
    }

    // Start Payment Processing
    setPaymentProcessing(true);
    setPaymentMessage("");

    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      setPaymentMessage("Your payment was successful!");
    }, 3000);
  };

  // Reset the form for both payment method and card details
  const resetForm = () => {
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setPaymentMethod("");
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      additionalInfo: "",
    });
  };

  // Handle closing the success modal
  const handleCloseModal = () => {
    setPaymentSuccess(false);
    setShowPaymentModal(false); // Hide the payment modal
    clearCart()
    resetForm(); // Clear all form data
  };

  const countries = [
    { name: "Sri Lanka", provinces: ["Western Province", "Central Province", "Southern Province", "North Western Province", "North Central Province", "Eastern Province", "Northern Province"] },
    { name: "United States", provinces: ["California", "Texas", "Florida", "New York", "Illinois"] },
    { name: "Canada", provinces: ["Ontario", "Quebec", "British Columbia", "Alberta", "Nova Scotia"] },
    { name: "India", provinces: ["Maharashtra", "Tamil Nadu", "Karnataka", "Uttar Pradesh", "West Bengal"] },
    { name: "United Kingdom", provinces: ["England", "Scotland", "Wales", "Northern Ireland"] },
    { name: "Pakistan", provinces: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"] },
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const selectedCountryData = countries.find((c) => c.name === country);
    if (selectedCountryData) {
      setProvinces(selectedCountryData.provinces);
    } else {
      setProvinces([]);
    }
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(e.target.value);
  };

  return (
    <div className="w-full h-auto bg-white font-poppins pt-20">
      <div className="flex flex-col md:flex-row max-w-6xl gap-5 mx-auto py-8">

        <div className="w-full md:w-1/2 p-6  rounded-lg ">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Billing Details</h2>

          {formError && (
            <div className="mb-4 text-red-500 font-medium">{formError}</div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Street Address</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-2">Country / Region</label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Province</label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option value="">Select Province</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={userDetails.zipCode}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={userDetails.additionalInfo}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 pt-4  rounded-lg ">
          <div className="space-y-6">
            <div className="flex justify-between pb-4 border-b border-gray-300">
              <span className="text-lg font-semibold">Product</span>
              <span className="text-lg font-semibold">Subtotal</span>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-800">
                  Rs. {item.price.toLocaleString()} x {item.quantity}
                </span>
              </div>
            ))}
            <div className="flex justify-between pt-4 border-t border-gray-300">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">Rs. {getTotalPrice().toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-4 border-t border-gray-300">
              <span className="text-xl font-semibold">Total</span>
              <span className="text-xl text-yellow-600 font-semibold">
                Rs. {getTotalPrice().toLocaleString()}
              </span>
            </div>
            {showPaymentModal && (
              <div className="">
                <h2 className="text-2xl text-center md:text-3xl font-bold mb-4">
                  Select Payment Method
                </h2>
                <p className="text-red-600 text-center mb-4">{paymentMessage}</p>
                <div className="space-y-4">
                  {/* Payment Method Selection */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        className="form-radio text-blue-600"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      Card Payment
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        className="form-radio text-blue-600"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                      />
                      Cash on Delivery
                    </label>
                  </div>
                  {/* Card Payment Inputs */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-lg font-medium mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                          placeholder="Enter your card number"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/2">
                          <label className="block text-lg font-medium mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label className="block text-lg font-medium mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 p-3"
                            placeholder="Enter CVV"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Proceed Button */}
                  <button
                    onClick={handlePaymentProcessing}
                    className="bg-blue-500 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-600"
                  >
                    {paymentProcessing ? "Processing..." : "Proceed to Payment"}
                  </button>
                </div>

              </div>
            )}
            <div className="mt-8">
              {!showPaymentModal && !paymentProcessing && (
                <Button onClick={handlePlaceOrder} label="Place Order" />
              )}
            </div>
          </div>

          {/* Payment Processing Modal */}
          {paymentProcessing && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full md:w-1/2 lg:w-1/3 text-center mx-4">
                <div className="flex flex-col items-center mb-6">
                  {/* Modern Animated Dot Loader */}
                  <div className="flex space-x-2 mb-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce100"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce200"></div>
                  </div>

                  {/* Loading Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="blue"
                    className="w-10 h-10 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700">
                  {paymentMethod === "card"
                    ? "Processing your card payment securely. Please wait..."
                    : "Confirming your Cash on Delivery order. Hold tight!"}
                </p>
              </div>
            </div>
          )}



          {/* Confirmation Modal */}
          {paymentSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-7 w-full max-w-lg text-center mx-4">
                <div className="flex flex-col items-center mb-6">
                  {/* Success Icon */}
                  <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="green"
                      className="w-14 h-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">🎉 Success! 🎉</h2>
                <p className="text-white text-lg">
                  Thank you, <strong>{userDetails.firstName} {userDetails.lastName}</strong>, for shopping with us!
                </p>
                <div className="bg-white p-5 rounded-lg shadow-md text-left text-gray-800 space-y-4 max-h-[50vh] overflow-y-auto">
                  <p>
                    <strong>Order ID:</strong> #{Math.floor(Math.random() * 1000000)}
                  </p>
                  <p>
                    <strong>Shipping To:</strong> {userDetails.address}
                  </p>
                  <p>
                    <strong>Payment Method:</strong> {paymentMethod}
                  </p>
                  <p>
                    A confirmation email has been sent to <strong>{userDetails.email}</strong>.
                  </p>
                  <p>Your order will arrive in 3-5 business days.</p>
                </div>
                <Link href={`/`}>
                  <button
                    onClick={handleCloseModal}
                    className="bg-white text-green-500 font-semibold mt-6 w-full py-3 rounded-lg"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
      <Frame />
    </div>
  );
};

export default CheckoutPage;



























