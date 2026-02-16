import React, { useState } from "react";
import axios from "axios";
import { AppUrl } from "../App";

const CreateTemplate = () => {

  const [loading, setLoading] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    componentName: "",
  });

  const [fields, setFields] = useState([
    {
      name: "",
      label: "",
      type: "text",
      defaultValue: "",
    },
  ]);

  /* ================= BASIC INFO ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  /* ================= IMAGE ================= */

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setPreviewImage(file);
    setPreviewUrl(URL.createObjectURL(file));

  };

  /* ================= FIELD CHANGE ================= */

  const handleFieldChange = (index, e) => {

    const { name, value } = e.target;

    const updated = [...fields];

    updated[index][name] = value;

    setFields(updated);

  };

  /* ================= ADD FIELD ================= */

  const addField = () => {

    setFields((prev) => [
      ...prev,
      {
        name: "",
        label: "",
        type: "text",
        defaultValue: "",
      },
    ]);

  };

  /* ================= REMOVE FIELD ================= */

  const removeField = (index) => {

    setFields((prev) => prev.filter((_, i) => i !== index));

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.name || !formData.category || !formData.componentName) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {

      const data = new FormData();

      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("componentName", formData.componentName);
      data.append("fields", JSON.stringify(fields));

      if (previewImage) {
        data.append("previewImage", previewImage);
      }

      await axios.post(
        `${AppUrl}/template/createtemplate`,
        data
      );

      alert("Template Created Successfully ✅");

      // reset form
      setFormData({
        name: "",
        category: "",
        componentName: "",
      });

      setFields([
        {
          name: "",
          label: "",
          type: "text",
          defaultValue: "",
        },
      ]);

      setPreviewImage(null);
      setPreviewUrl("");

    } catch (error) {

      console.error(error);

      alert("Failed to create template ❌");

    } finally {

      setLoading(false);

    }

  };

  /* ================= UI ================= */

  return (

    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create Email Template
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* BASIC INFO */}
          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Template Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category (Marketing, Transactional)"
              value={formData.category}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="componentName"
              placeholder="Component Name (ElegantReceipt)"
              value={formData.componentName}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block font-medium mb-2">
              Preview Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded-lg w-full"
            />

            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-4 h-40 rounded-lg shadow"
              />
            )}

          </div>

          {/* FIELDS */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              Template Fields
            </h2>

            <div className="space-y-4">

              {fields.map((field, index) => (

                <div
                  key={index}
                  className="border p-4 rounded-lg bg-gray-50"
                >

                  <div className="grid md:grid-cols-2 gap-3 mb-3">

                    <input
                      name="name"
                      placeholder="Variable Name"
                      value={field.name}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="border p-2 rounded-lg"
                    />

                    <input
                      name="label"
                      placeholder="Label"
                      value={field.label}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="border p-2 rounded-lg"
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-3">

                    <select
                      name="type"
                      value={field.type}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="border p-2 rounded-lg"
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="button">Button</option>
                      <option value="divider">Divider</option>
                      <option value="color">Color</option>
                    </select>

                    <input
                      name="defaultValue"
                      placeholder="Default Value"
                      value={field.defaultValue}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="border p-2 rounded-lg"
                    />

                  </div>

                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="text-red-500 mt-3 text-sm"
                  >
                    Remove Field
                  </button>

                </div>

              ))}

            </div>

            <button
              type="button"
              onClick={addField}
              className="mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              + Add Field
            </button>

          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Creating Template..." : "Create Template"}
          </button>

        </form>

      </div>

    </div>

  );

};

export default CreateTemplate;
