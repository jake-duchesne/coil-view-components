# frozen_string_literal: true

module Coil
  class ButtonComponent < ViewComponent::Base
    attr_reader :width, :height

    BASE_CLASSES = %w[
      h-12
      px-8
      text-base
    ].freeze

    PRIMARY_CLASSES = %w[
      bg-primary-black-100
      text-white
      flex
      items-center
      justify-center
      border-transparent
      border-2
      enabled:hover:text-black
      enabled:hover:bg-white
      enabled:hover:border-2
      enabled:hover:border-black group
      disabled:bg-disabled-button
      disabled:cursor-not-allowed
      disabled:text-disabled-text
    ].freeze

    SECONDARY_CLASSES = %w[
      text-black
      flex
      items-center
      justify-center
      border-black
      border-2
      hover:text-white
      hover:bg-dark-grey
      hover:border-2
      hover:border-black group
    ].freeze

    GHOST_CLASSES = %w[
      bg-transparent
      text-black
      flex
      items-center
      justify-center
      border-transparent group
      hover:text-ghost-hover
    ].freeze

    FILE_BUTTON_CLASSES = %w[
      text-black
      inline-flex
      items-center
      justify-center
      border-black
      border-2
      hover:text-white
      hover:bg-dark-grey
      hover:border-2
      hover:order-black
      group
    ].freeze

    BUTTON_TYPE_MAPPINGS = {
      primary: PRIMARY_CLASSES,
      secondary: SECONDARY_CLASSES,
      ghost: GHOST_CLASSES,
      file: FILE_BUTTON_CLASSES
    }.freeze

    def initialize(title, type: :primary, icon: nil, button_type: :button, **options)
      @title = title
      @icon = icon
      @type = type
      @button_type = button_type
      button_options(options)
    end

    def classes
      (BUTTON_TYPE_MAPPINGS[@type] + BASE_CLASSES).join(" ")
    end

    def button_id
      @button_id.presence
    end

    def render_file_button?
      @type == :file
    end

    def button_options(options)
      @width = options[:width] ||= 22
      @height = options[:height] ||= 22
      @data = options[:data] ||= {}
      create_instance_options(options.except(:width, :height, :data))
    end

    private

    # Expect to create these if present
    # @button_id = options[:button_id]
    # @override_classes = options[:classes]
    # @title_classes = options[:title_classes]
    # @onclick = options[:onclick]
    # @form = options[:form]
    # @name = options[:name]
    # @value = options[:value]
    # @disabled = options[:disabled]
    def create_instance_options(options)
      options.each_key do |key|
        instance_variable_set("@#{key}", options[key])
      end
    end
  end
end
