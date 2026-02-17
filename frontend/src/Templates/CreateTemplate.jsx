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

    <div className="min-h-screen bg-background py-10 px-4 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto bg-card rounded-xl border border-border shadow-lg p-8 relative z-10 backdrop-blur-sm">

        <h1 className="text-3xl font-bold text-foreground mb-6">
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
              className="bg-background border border-border p-3 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category (Marketing, Transactional)"
              value={formData.category}
              onChange={handleChange}
              className="bg-background border border-border p-3 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
              required
            />

            <input
              type="text"
              name="componentName"
              placeholder="Component Name (ElegantReceipt)"
              value={formData.componentName}
              onChange={handleChange}
              className="bg-background border border-border p-3 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
              required
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block font-medium mb-2 text-foreground">
              Preview Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-background border border-border p-2 rounded-lg w-full text-foreground"
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

            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Template Fields
            </h2>

            <div className="space-y-4">

              {fields.map((field, index) => (

                <div
                  key={index}
                  className="border border-border p-4 rounded-lg bg-background"
                >

                  <div className="grid md:grid-cols-2 gap-3 mb-3">

                    <input
                      name="name"
                      placeholder="Variable Name"
                      value={field.name}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="bg-background border border-border p-2 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
                    />

                    <input
                      name="label"
                      placeholder="Label"
                      value={field.label}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="bg-background border border-border p-2 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-3">

                    <select
                      name="type"
                      value={field.type}
                      onChange={(e) => handleFieldChange(index, e)}
                      className="bg-background border border-border p-2 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
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
                      className="bg-background border border-border p-2 rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none"
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
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            {loading ? "Creating Template..." : "Create Template"}
          </button>

        </form>

      </div>

    </div>

  );

};

export default CreateTemplate;
